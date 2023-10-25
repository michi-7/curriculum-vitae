import { Avatar, Button, Typography } from '@mui/material'

import useTheme from '../hooks/useTheme'
import { AppContainer, Left, PaperContainer, Right } from './App.styled'

const App = () => {
	const theme = useTheme()

	return (
		<AppContainer>
			<PaperContainer elevation={0}>
				<Left>
					<div>
						<Avatar sx={{ width: 200, height: 200 }}>MM</Avatar>
					</div>
					<div style={{ flex: 1 }}>
						<Typography variant='button'>info personali</Typography>
					</div>
				</Left>

				<Right>
					<Typography variant='h3'>MICHELE MENEGATTI</Typography>
					<Typography variant='h5'>Curriculum Vitae</Typography>

					<Button onClick={() => theme.toggleTheme()} variant='contained'>
						Change Theme
					</Button>
					<div>{theme.palette.mode}</div>
				</Right>
			</PaperContainer>
		</AppContainer>
	)
}

export default App
