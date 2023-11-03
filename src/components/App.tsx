import { AppContainer, PaperContainer } from './App.styled'
import FloatIsland from './floatIsland/FloatIsland'
import LeftSide from './leftSide/LeftSide'
import RightSide from './rightSide/RightSide'

const App = () => (
	<AppContainer>
		<FloatIsland />
		<PaperContainer elevation={0}>
			<LeftSide />
			<RightSide />
		</PaperContainer>
	</AppContainer>
)

export default App
