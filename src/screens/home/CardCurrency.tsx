interface Props {
	text: string
	balance: number
}

export const CardCurrency = ({ text, balance }: Props) => {
	return (
		<div className='flex justify-between p-5 bg-dark-500 rounded-2xl font-semibold'>
			<p className='uppercase'>{text}</p>
			<p>{balance}</p>
		</div>
	)
}
