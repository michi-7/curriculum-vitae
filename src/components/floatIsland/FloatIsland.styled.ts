import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'

export const IslandContainer = styled('div')(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(6),
  right: theme.spacing(6),
  padding: theme.spacing(2, 4),
  backgroundColor: theme.palette.contrastBackground,
  borderRadius: theme.shape.borderRadius,
}))

export const LangButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.dark,

  '&:hover': {
    backgroundColor: theme.palette.grey[200]
  }
}))
