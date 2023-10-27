import {
	ThemeProvider as MuiThemeProvider,
	createTheme,
} from '@mui/material/styles'
import { createContext, useMemo, useState } from 'react'

import commonTheme from './commonTheme'
import darkTheme from './darkTheme'
import { ThemeContextProviderProps, ThemeVariant } from './types'

declare module '@mui/material/styles' {
	interface Palette {
		contrastText: string
		contrastBackground: string
	}
	interface PaletteOptions {
		contrastText: string
		contrastBackground: string
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
				...commonTheme,
				palette: theme === 'dark' ? darkTheme : darkTheme,
			}),
		[theme],
	)

	return (
		<ThemeContext.Provider value={contextValue}>
			<MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider
