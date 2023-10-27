import { styled } from '@mui/material/styles'

import bubbles from '../../images/bubbles.png'

export const LeftContainer = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	borderTopLeftRadius: theme.shape.borderRadius,
	borderBottomLeftRadius: theme.shape.borderRadius,
	backgroundColor: theme.palette.background.paper,
}))

export const AvatarContainer = styled('div')(({ theme }) => ({
	backgroundImage: `url(${bubbles})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'contain',
	padding: theme.spacing(4),
	borderTopLeftRadius: theme.shape.borderRadius,
}))

export const MainInfo = styled('div')(({ theme }) => ({
	flex: 1,
	padding: theme.spacing(4),
}))
