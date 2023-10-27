import { Theme, useTheme as muiUseTheme } from '@mui/material/styles'
import { useContext, useMemo } from 'react'

import { ThemeContext } from '../theme/ThemeContextProvider'

type UseThemeReturnType = Theme & { toggleTheme: () => void }

const useTheme = (): UseThemeReturnType => {
	const t = muiUseTheme()
	const themeContext = useContext(ThemeContext)
	return useMemo(
		() => ({
			...t,
			toggleTheme: themeContext.toggleTheme,
		}),
		[t],
	)
}

export default useTheme
