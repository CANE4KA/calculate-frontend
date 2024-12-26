import { ButtonHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}

export const Button = ({ children, className, ...rest }: Props) => {
	return (
		<button
			className={twMerge(
				className,
				'rounded border border-transparent px-5 py-3 text-base bg-[#1a1a1a] cursor-pointer transition hover:border-[#dcfce7]'
			)}
			{...rest}
		>
			{children}
		</button>
	)
}
