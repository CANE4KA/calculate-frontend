import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { userService } from '../services/user.service'

import { IUser } from '../types/auth.types'

export const useUpdateUser = () => {
	const { isPending, mutate } = useMutation({
		mutationKey: ['update user'],
		mutationFn: (data: IUser) => userService.update(data),
		onSuccess() {
			toast.success('Operation success!')
		},
		onError() {
			toast.error('Operation failed :(')
		}
	})

	return { isPending, mutate }
}
