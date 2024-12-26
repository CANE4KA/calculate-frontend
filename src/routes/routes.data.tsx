import { RouteProps } from 'react-router'

import { Convert } from '../screens/convert/Convert'
import { Deposit } from '../screens/deposit/Deposit'
import { Home } from '../screens/home/Home'

import { pageConfig } from '../config/page.config'

export const PROTECT_ROUTES: RouteProps[] = [
	{
		index: true,
		element: <Home />
	},
	{
		path: pageConfig.deposit,
		element: <Deposit />
	},
	{
		path: pageConfig.convert,
		element: <Convert />
	}
]
