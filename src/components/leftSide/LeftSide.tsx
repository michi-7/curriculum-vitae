import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { FaEnvelope, FaPhone } from 'react-icons/fa6'

import { useTranslate } from '../../i18n'
import InfoRow from './InfoRow'
import {
	AvatarContainer,
	ContactRow,
	LeftContainer,
	MainInfo,
} from './LeftSide.styled'

const LeftSide = (): JSX.Element => {
	const t = useTranslate()

	return (
		<LeftContainer>
			<AvatarContainer>
				<Avatar sx={{ width: 200, height: 200 }}>MM</Avatar>
			</AvatarContainer>
			<MainInfo>
				<Typography variant='button'>{t('personalInfo')}</Typography>

				<InfoRow labelKey='birthDate' text='07/03/1992' />
				<InfoRow labelKey='birthPlace' text='Portomaggiore (FE)' />
				<InfoRow labelKey='citizenship' text='Italiana' />
				<InfoRow labelKey='residence' text='Bergamo' />

				<Typography variant='button' style={{ marginTop: 16 }}>
					{t('contacts')}
				</Typography>
				<ContactRow>
					<FaEnvelope />
					<Typography>michele.menegatti7@gmail.com</Typography>
				</ContactRow>
				<ContactRow>
					<FaPhone />
					<Typography>+39 3491083432</Typography>
				</ContactRow>
			</MainInfo>
		</LeftContainer>
	)
}

export default LeftSide
