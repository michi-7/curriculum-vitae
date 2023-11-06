import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

export const RightContainer = styled('div')(({ theme }) => ({
	flex: 3,
	display: 'flex',
	flexDirection: 'column',
	padding: theme.spacing(4),
	color: theme.palette.contrastText,
	borderTopRightRadius: theme.shape.borderRadius,
	borderBottomRightRadius: theme.shape.borderRadius,
	backgroundColor: theme.palette.contrastBackground,
}))

export const TopContainer = styled('div')(({ theme }) => ({
	marginBottom: theme.spacing(8),
}))

export const SectionTitle = styled(Typography)(({ theme }) => ({
	lineHeight: 1,
	color: theme.palette.secondary.main,
	marginBottom: theme.spacing(2),
	borderBottomColor: theme.palette.secondary.main,
	borderBottomStyle: 'solid',
	borderBottomWidth: 3,
}))
