export const BalanceCard = ({ totalBalance }: { totalBalance: number }) => {
	return (
		<div className='rounded-2xl flex flex-col gap-4 bg-green-100 p-7 text-gray-900'>
			<p>Total estimated value</p>
			<div className='flex gap-1 items-end'>
				<p className='text-5xl font-semibold text-wrap'>{totalBalance}</p>
				<p className='font-semibold'>USDT</p>
			</div>
		</div>
	)
}
