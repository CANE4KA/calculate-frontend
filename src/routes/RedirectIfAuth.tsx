import Cookies from 'js-cookie'
import { Navigate, Outlet } from 'react-router'

import { EnumTokens } from '../services/auth/auth.helper'

import { pageConfig } from '../config/page.config'

export const RedirectIfAuth = () => {
	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)

	if (accessToken) return <Navigate to={pageConfig.home} />

	return <Outlet />
}
