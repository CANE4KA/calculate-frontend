import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'

import { authService } from '../../services/auth/auth.service'

import { pageConfig } from '../../config/page.config'

import { IUserForm } from '../../types/auth.types'

export const useAuthForm = (isLogin: boolean) => {
	const navigate = useNavigate()

	const { register, handleSubmit, reset } = useForm<IUserForm>()

	const { mutate: mutateLogin, isPending: isPendingLogin } = useMutation({
		mutationKey: ['login'],
		mutationFn: (data: IUserForm) => authService.main('login', data),
		onSuccess() {
			reset()
			navigate(pageConfig.home)
		},
		onError(error) {
			if (axios.isAxiosError(error)) {
				toast.error(error.response?.data?.message)
			}
		}
	})

	const { mutate: mutateRegister, isPending: isPendingRegister } = useMutation({
		mutationKey: ['register'],
		mutationFn: (data: IUserForm) => authService.main('register', data),
		onSuccess() {
			reset()
			navigate(pageConfig.home)
		},
		onError(error) {
			if (axios.isAxiosError(error)) {
				toast.error(error.response?.data?.message)
			}
		}
	})

	const onSubmit = (data: IUserForm) => {
		isLogin ? mutateLogin(data) : mutateRegister(data)
	}

	const isLoading = isPendingLogin || isPendingRegister

	return { onSubmit, handleSubmit, isLoading, register }
}
