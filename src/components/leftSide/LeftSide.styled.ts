import { styled } from '@mui/material/styles'

import bubbles from '../../images/bubbles.png'
import { FlexRow } from '../common.styled'

export const LeftContainer = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	flex: 1,
	borderTopLeftRadius: theme.shape.borderRadius,
	borderBottomLeftRadius: theme.shape.borderRadius,
	backgroundColor: theme.palette.background.paper,
}))

export const AvatarContainer = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	padding: theme.spacing(4),
	borderTopLeftRadius: theme.shape.borderRadius,
	backgroundImage: `url(${bubbles})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: '100% auto',
}))

export const MainInfo = styled('div')(({ theme }) => ({
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
	padding: theme.spacing(4),
}))

export const ContactRow = styled(FlexRow)({
	marginTop: 4,
	gap: 4,
})
