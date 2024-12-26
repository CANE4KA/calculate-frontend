import { ArrowRightLeft, LucideArrowDown } from 'lucide-react'

import { useProfile } from '../../hooks/useProfile'

import { BalanceCard } from './BalanceCard'
import { CardAction } from './CardAction'
import { CardCurrency } from './CardCurrency'

export const Home = () => {
	const { isLoading, user, currencies } = useProfile()

	return (
		<>
			{isLoading && <div>Loading...</div>}
			<div className='flex flex-col gap-2 min-w-80'>
				<BalanceCard totalBalance={user?.totalInUsdt || 0} />

				<div className='flex gap-2 justify-center'>
					<CardAction text='Convert' Icon={ArrowRightLeft} />
					<CardAction text='Deposit' Icon={LucideArrowDown} />
				</div>

				<div className='text-center flex flex-col gap-2'>
					<p className='text-xl'>My assets</p>
					{currencies?.map(currency => (
						<CardCurrency
							key={currency.currency}
							text={currency.currency}
							balance={currency.amount}
						/>
					))}
				</div>
			</div>
		</>
	)
}
