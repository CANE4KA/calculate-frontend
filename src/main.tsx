import { ThemeProvider, createTheme } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'

import { ReactRoutes } from './routes/Routes'

import './index.css'

const queryClient = new QueryClient()

const theme = createTheme({
	palette: {
		primary: { main: '#dcfce7' }
	}
})

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<ReactRoutes />
				<Toaster />
			</ThemeProvider>
		</QueryClientProvider>
	</StrictMode>
)
