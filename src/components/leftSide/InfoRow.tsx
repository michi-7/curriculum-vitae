import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import { TranslationKey, useTranslate } from '../../i18n'

type InfoRowProps = {
	labelKey: TranslationKey
	text: string
}

const InfoRow = ({ labelKey, text }: InfoRowProps): JSX.Element => {
	const t = useTranslate()

	return (
		<StyledT>
			<span style={{ marginLeft: -12 }}>{t(labelKey)}:</span> {text}
		</StyledT>
	)
}

const StyledT = styled(Typography)({
	marginLeft: 12,
	marginTop: 4,
})

export default InfoRow
