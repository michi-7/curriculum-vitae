import { AppContainer, PaperContainer } from './App.styled'
import LeftSide from './leftSide/LeftSide'
import RightSide from './rightSide/RightSide'

const App = () => {
	return (
		<AppContainer>
			<PaperContainer elevation={0}>
				<LeftSide />

				<RightSide />
			</PaperContainer>
		</AppContainer>
	)
}

export default App
