import Slider from '@mui/material/Slider'
import { ChevronLeft } from 'lucide-react'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Link } from 'react-router'

import { Button } from '../../components/ui/Button'

import { pageConfig } from '../../config/page.config'

import { useProfile } from '../../hooks/useProfile'
import { useUpdateUser } from '../../hooks/useUpdateUser'

import { Select } from './DepositSelect'

export interface IDepositForm {
	sliderValue: number
	currency: string
}

export const Deposit = () => {
	const [value, setValue] = useState(0)

	const { isPending, mutate } = useUpdateUser()
	const { currencies } = useProfile()

	const { control, register, handleSubmit, watch } = useForm<IDepositForm>({
		defaultValues: { sliderValue: 0 }
	})

	const handleChange = (_: Event, number: number | number[]) => {
		if (typeof number === 'number') return setValue(number)
	}

	const onSubmit = (data: IDepositForm) => {
		mutate({ [currentCurrency]: data.sliderValue })
	}

	const currentCurrency = watch('currency')

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='min-w-80 flex flex-col gap-16'
		>
			<Link to={pageConfig.home}>
				<ChevronLeft size={30} />
			</Link>

			<div className='flex flex-col items-center gap-3'>
				<Select currencies={currencies} register={register} />

				<p className='text-2xl font-semibold'>
					Deposit: {value} {currentCurrency?.toUpperCase()}
				</p>

				<Controller
					name='sliderValue'
					control={control}
					render={({ field }) => (
						<Slider
							{...field}
							value={field.value}
							onChange={(_, value) => {
								field.onChange(value)
								handleChange(_, value)
							}}
							min={0}
							max={100}
							step={0.01}
							color='primary'
						/>
					)}
				/>

				<Button type='submit'>{isPending ? 'Loading...' : 'Deposit'}</Button>
			</div>
		</form>
	)
}
