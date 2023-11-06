import Typography from '@mui/material/Typography'

import { useTranslate } from '../../i18n'
import { RightContainer, SectionTitle, TopContainer } from './RightSide.styled'

const RightSide = (): JSX.Element => {
	const t = useTranslate()

	return (
		<RightContainer>
			<TopContainer>
				<Typography variant='h3'>MICHELE MENEGATTI</Typography>
				<Typography variant='h5'>Curriculum Vitae</Typography>
			</TopContainer>

			<SectionTitle variant='button'>{t('workExperiences')}</SectionTitle>
			<div></div>

			<SectionTitle variant='button'>{t('softSkills')}</SectionTitle>
			<div></div>
		</RightContainer>
	)
}

export default RightSide
