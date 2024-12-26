import toast from 'react-hot-toast'

import { Currency, exchangeRates } from './exchange-rates'

export const convertCurrency = (
	amount: number,
	fromCurrency: Currency,
	toCurrency: Currency
) => {
	const ratesFromCurrency = exchangeRates[fromCurrency]

	if (!ratesFromCurrency || !(toCurrency in ratesFromCurrency)) {
		toast.error('Курс недоступен!')
		return 0
	}
	const rate = ratesFromCurrency[toCurrency]

	return amount * rate
}
