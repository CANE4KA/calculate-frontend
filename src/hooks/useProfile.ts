import { useQuery } from '@tanstack/react-query'

import { userService } from '../services/user.service'

export function useProfile() {
	const { data, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.getProfile(),
		retry: 1
	})

	return {
		isLoading,
		user: data?.user,
		currencies: data?.currencies
	}
}
