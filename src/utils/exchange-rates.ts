export const exchangeRates = {
	BTC: {
		ETH: 28.78,
		USDT: 96424.1,
		MATIC: 199136.76,
		BTC: 1
	},
	ETH: {
		BTC: 1 / 28.78,
		USDT: 3352.74,
		MATIC: 6921.94,
		ETH: 1
	},
	USDT: {
		BTC: 1 / 96424.1,
		ETH: 1 / 3352.74,
		MATIC: 2.07,
		USDT: 1
	},
	MATIC: {
		BTC: 1 / 199136.76,
		ETH: 1 / 6921.94,
		USDT: 1 / 2.07,
		MATIC: 1
	}
} as const

export type Currency = keyof typeof exchangeRates
