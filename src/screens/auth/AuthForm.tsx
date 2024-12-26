import { useState } from 'react'

import { Button } from '../../components/ui/Button'

import { useAuthForm } from './useAuthForm'

export const AuthForm = () => {
	const [isLogin, setIsLogin] = useState(true)

	const { handleSubmit, isLoading, onSubmit, register } = useAuthForm(isLogin)

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col gap-4 items-center'
		>
			<h1 className='text-4xl'>{isLogin ? 'Вход' : 'Регистрация'}</h1>

			<input
				type='email'
				placeholder='Enter email: '
				autoComplete='off'
				{...register('email', { required: true })}
				className='input-field'
			/>

			<input
				type='password'
				placeholder='Enter password: '
				autoComplete='off'
				{...register('password', { required: true })}
				className='input-field'
			/>

			<Button type='submit' disabled={isLoading}>
				{isLogin ? 'Войти' : 'Зарегистрироваться'}
			</Button>
			<Button type='button' onClick={() => setIsLogin(!isLogin)}>
				{isLogin ? 'Хочу зарегистрироваться' : 'Хочу войти'}
			</Button>
		</form>
	)
}
