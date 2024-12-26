import { UseFormRegister } from 'react-hook-form'

import { IForm } from './Convert'
import { ConvertInput } from './ConvertInput'

interface Props {
	register: UseFormRegister<IForm>
	currencies: { currency: string; amount: number }[] | undefined
}

export const ConvertFields = ({ register, currencies }: Props) => {
	return (
		<>
			<div className='flex flex-col gap-5 bg-yellow-100 p-6 text-dark-500 font-semibold rounded-2xl'>
				<p>Send</p>

				<div>
					<ConvertInput
						registerName='firstCurrencyAmount'
						register={register}
						placeholder='Enter send: '
						className='placeholder:text-dark-400'
					/>

					<select
						className='outline-none bg-transparent'
						{...register('firstCurrency', { required: true })}
					>
						{currencies
							?.filter(currency => currency.amount > 0)
							.map(currency => (
								<option
									key={currency.currency}
									value={currency.currency.toUpperCase()}
								>
									{currency.currency.toUpperCase()}
								</option>
							))}
					</select>
				</div>
			</div>

			<div className='flex flex-col gap-5 bg-pink-100 p-6 text-dark-500 font-semibold rounded-2xl'>
				<p>Receive</p>

				<div>
					<ConvertInput
						registerName='secondCurrencyAmount'
						register={register}
						disabled
					/>

					<select
						className='outline-none bg-transparent'
						{...register('secondCurrency', { required: true })}
					>
						{currencies?.map(currency => (
							<option
								key={currency.currency}
								value={currency.currency.toUpperCase()}
							>
								{currency.currency.toUpperCase()}
							</option>
						))}
					</select>
				</div>
			</div>
		</>
	)
}
