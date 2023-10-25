import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

//import darkBG from '../images/dark-bg.svg'
//import lightBG from '../images/light-bg.svg'

export const AppContainer = styled('div')(({ theme }) => ({
	flex: 1,
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',

	color: theme.palette.text.primary,
	backgroundColor: theme.palette.background.default,
	padding: theme.spacing(12),

	/* backgroundImage:
		theme.palette.mode === 'dark' ? `url(${darkBG})` : `url(${lightBG})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'auto', */
}))

export const PaperContainer = styled(Paper)(() => ({
	display: 'flex',
}))

export const Left = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(4),
	padding: theme.spacing(4),
	borderTopLeftRadius: theme.shape.borderRadius,
	borderBottomLeftRadius: theme.shape.borderRadius,
	backgroundColor: theme.palette.background.paper,
}))

export const Right = styled('div')(({ theme }) => ({
	padding: theme.spacing(4),
	borderTopRightRadius: theme.shape.borderRadius,
	borderBottomRightRadius: theme.shape.borderRadius,
	backgroundColor: theme.palette.background.secondary,
}))
