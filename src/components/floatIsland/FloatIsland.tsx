import { useContext } from 'react'
import { FaLanguage } from 'react-icons/fa6'

import { LangContext } from '../../i18n'
import { IslandContainer, LangButton } from './FloatIsland.styled'

const FloatIsland = (): JSX.Element => {
	const { changeLang, t } = useContext(LangContext)

	return (
		<IslandContainer>
			<LangButton aria-label={t('changeLang')} onClick={changeLang}>
				<FaLanguage />
			</LangButton>
		</IslandContainer>
	)
}

export default FloatIsland
