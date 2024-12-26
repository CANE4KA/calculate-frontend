import { BrowserRouter, Route, Routes } from 'react-router'

import { AuthForm } from '../screens/auth/AuthForm'

import { pageConfig } from '../config/page.config'

import { ProtectedRoutes } from './ProtectedRoutes'
import { RedirectIfAuth } from './RedirectIfAuth'
import { PROTECT_ROUTES } from './routes.data'

export const ReactRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<ProtectedRoutes />}>
					{PROTECT_ROUTES.map(route => (
						<Route key={route.path || 'home'} {...route} />
					))}
				</Route>

				<Route element={<RedirectIfAuth />}>
					<Route path={pageConfig.auth} element={<AuthForm />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
