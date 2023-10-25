import {
	ThemeProvider as MuiThemeProvider,
	createTheme,
} from '@mui/material/styles'
import { createContext, useMemo, useState } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'

import darkTheme from './darkTheme'
import { ThemeContextProviderProps, ThemeVariant } from './types'

declare module '@mui/material/styles' {
	interface TypeBackground {
		default: string
		secondary: string
		paper: string
	}
}

export const ThemeContext = createContext({ toggleTheme: () => {} })

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
	const [theme, setTheme] = useState<ThemeVariant>('dark')

	const contextValue = useMemo(
		() => ({
			toggleTheme: () =>
				setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')),
		}),
		[],
	)

	const muiTheme = useMemo(
		() =>
			createTheme({
				...(theme === 'dark' ? darkTheme : darkTheme),
				spacing: 4,
			}),
		[theme],
	)

	return (
		<ThemeContext.Provider value={contextValue}>
			<MuiThemeProvider theme={muiTheme}>
				<SCThemeProvider theme={muiTheme}>{children}</SCThemeProvider>
			</MuiThemeProvider>
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider
