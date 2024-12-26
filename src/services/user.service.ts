import { axiosWithAuth } from '../api/axios'

import { IUser } from '../types/auth.types'

export interface IUserResponse {
	user: IUser
	currencies: { currency: string; amount: number }[]
}

class UserService {
	private BASE_URL = '/user/profile'

	async getProfile() {
		const response = await axiosWithAuth.get<IUserResponse>(this.BASE_URL)
		return response.data
	}

	async update(data: IUser) {
		const response = await axiosWithAuth.put(this.BASE_URL, data)
		return response.data
	}
}

export const userService = new UserService()
