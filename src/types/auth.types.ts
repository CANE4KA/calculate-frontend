export interface IUserForm {
	email?: string
	password?: string
}

export interface ICurrencyUser {
	usdt?: number
	btc?: number
	eth?: number
	matic?: number
}

export interface IUser extends IUserForm, ICurrencyUser {
	id?: string
	name?: string
	createdAt?: string
	updatedAt?: string
	totalInUsdt?: number
}

export interface IAuthResponse {
	user: IUser
	currencies: {
		amount: number
		currency: string
	}
	accessToken: string
}
