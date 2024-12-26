import { ChevronLeft } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router'

import { Button } from '../../components/ui/Button'

import { pageConfig } from '../../config/page.config'

import { useProfile } from '../../hooks/useProfile'
import { useUpdateUser } from '../../hooks/useUpdateUser'

import { convertCurrency } from '../../utils/convert-currency'
import { Currency } from '../../utils/exchange-rates'

import { ConvertFields } from './ConvertFields'

export interface IForm {
	firstCurrency: Currency
	secondCurrency: Currency
	firstCurrencyAmount: number
	secondCurrencyAmount: number
}

export const Convert = () => {
	const { currencies } = useProfile()
	const { mutate } = useUpdateUser()

	const { handleSubmit, register, watch, setValue } = useForm<IForm>({
		mode: 'onChange',
		defaultValues: {
			firstCurrency: 'USDT',
			secondCurrency: 'BTC'
		}
	})

	const onSubmit = (data: IForm) => {
		const firstCurrencyAmount =
			parseFloat(data.firstCurrencyAmount.toString()) * -1

		const secondCurrencyAmount = parseFloat(
			data.secondCurrencyAmount.toString()
		)

		mutate({
			[data.firstCurrency.toLowerCase()]: firstCurrencyAmount,
			[data.secondCurrency.toLowerCase()]: secondCurrencyAmount
		})
	}

	setValue(
		'secondCurrencyAmount',
		convertCurrency(
			watch('firstCurrencyAmount'),
			watch('firstCurrency'),
			watch('secondCurrency')
		)
	)

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-16'>
			<div className='flex items-center gap-16'>
				<Link to={pageConfig.home}>
					<ChevronLeft size={30} />
				</Link>

				<p className='text-3xl font-semibold'>Convert</p>
			</div>
			<div className='flex flex-col items-center gap-4'>
				<ConvertFields register={register} currencies={currencies} />

				<Button type='submit'>Convert</Button>
			</div>
		</form>
	)
}
