import { styled } from '@mui/material/styles'

type FlexProps = {
	gap?: number
}

export const FlexRow = styled('div')<FlexProps>(({ gap }) => ({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	gap,
}))