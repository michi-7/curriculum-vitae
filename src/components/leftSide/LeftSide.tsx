import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { FaEnvelope, FaPhone } from 'react-icons/fa6'

import useTranslate from '../../i18n/useTranslate'
import { FlexRow } from '../App.styled'
import { AvatarContainer, LeftContainer, MainInfo } from './LeftSide.styled'

const LeftSide = (): JSX.Element => {
	const t = useTranslate()

	return (
		<LeftContainer>
			<AvatarContainer>
				<Avatar sx={{ width: 200, height: 200 }}>MM</Avatar>
			</AvatarContainer>
			<MainInfo>
				<Typography variant='button'>{t('personalInfo')}</Typography>
				<Typography>{t('birthDate')}: 07/03/1992</Typography>
				<Typography>{t('birthPlace')}: Portomaggiore (FE)</Typography>
				<Typography>{t('citizenship')}: Italiana</Typography>
				<Typography variant='button'>{t('contacts')}</Typography>
				<FlexRow gap={4}>
					<FaEnvelope />
					<Typography>michele.menegatti7@gmail.com</Typography>
				</FlexRow>
				<FlexRow gap={4}>
					<FaPhone />
					<Typography>+39 3491083432</Typography>
				</FlexRow>
			</MainInfo>
		</LeftContainer>
	)
}

export default LeftSide
