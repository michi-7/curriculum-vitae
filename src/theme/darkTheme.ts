import { PaletteOptions } from '@mui/material/styles'

const darkTheme: PaletteOptions = {
	mode: 'dark',
	primary: {
		main: '#2196F3',
		light: '#90CAF9',
		dark: '#0D47A1',
		contrastText: '#121212',
	},
	secondary: {
		main: '#C2185B',
		light: '#F48FB1',
		dark: '#880E4F',
		contrastText: '#FFFFFF',
	},
	error: {
		main: '#D90429',
		light: '#EF233C',
		dark: '#BE0012',
		contrastText: '#FFFFFF',
	},
	warning: {
		main: '#FCA311',
		light: '#FDD654',
		dark: '#FB730B',
		contrastText: '#121212',
	},
	info: {
		main: '#00B4D8',
		light: '#B1E8F6',
		dark: '#005A66',
		contrastText: '#121212',
	},
	success: {
		main: '#6BC85B',
		light: '#B6E4AD',
		dark: '#106C2C',
		contrastText: '#121212',
	},
	background: {
		default: '#121212',
		paper: '#212A3E',
	},
	contrastBackground: '#FFF',
	contrastText: 'rgba(0, 0, 0, 0.87)',
}

export default darkTheme
