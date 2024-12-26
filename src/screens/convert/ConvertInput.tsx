import { InputHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

import { IForm } from './Convert'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	register: UseFormRegister<IForm>
	registerName: 'secondCurrencyAmount' | 'firstCurrencyAmount'
}

export const ConvertInput = ({
	register,
	className,
	registerName,
	...rest
}: Props) => {
	return (
		<input
			{...register(registerName, {
				required: true,
				validate: value => {
					return value > 0
				}
			})}
			type='number'
			step='any'
			className={twMerge(
				'bg-transparent border border-transparent border-b-black border-b-2 outline-none',
				className
			)}
			{...rest}
		/>
	)
}
