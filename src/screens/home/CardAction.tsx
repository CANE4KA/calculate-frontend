import { LucideIcon } from 'lucide-react'
import { Link } from 'react-router'

interface Props {
	Icon: LucideIcon
	text: string
}

export const CardAction = ({ Icon, text }: Props) => {
	return (
		<Link
			to={text.toLowerCase()}
			className='flex items-center flex-col gap-2 rounded-2xl bg-dark-500 px-6 py-3 cursor-pointer border border-transparent transition hover:border-[#dcfce7]'
		>
			<Icon color='white' />
			<p>{text}</p>
		</Link>
	)
}
