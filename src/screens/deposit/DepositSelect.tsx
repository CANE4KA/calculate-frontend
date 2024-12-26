import { UseFormRegister } from 'react-hook-form'

import { IDepositForm } from './Deposit'

interface Props {
	register: UseFormRegister<IDepositForm>
	currencies:
		| {
				currency: string
				amount: number
		  }[]
		| undefined
}

export const Select = ({ currencies, register }: Props) => {
	return (
		<select {...register('currency')} className='outline-none'>
			{currencies?.map(currency => (
				<option key={currency.currency} value={currency.currency}>
					{currency.currency.toUpperCase()}
				</option>
			))}
		</select>
	)
}
