import { createContext, useMemo, useState } from 'react'

import en from './langs/en'
import it from './langs/it'
import {
	Lang,
	LangContextProviderProps,
	LangContextType,
	LanguageTranslation,
	TranslationKey,
} from './types'

const langs: Record<Lang, LanguageTranslation> = {
	en,
	it,
}

export const LangContext = createContext<LangContextType>({
	changeLang: () => {},
	lang: 'it',
	t: (_k: TranslationKey) => '',
})

const LangContextProvider = ({
	children,
}: LangContextProviderProps): JSX.Element => {
	const [lang, setLang] = useState<Lang>('it')

	const contextValue = useMemo(
		() => ({
			lang,
			changeLang: () => setLang((prev) => (prev === 'it' ? 'en' : 'it')),
			t: (key: TranslationKey) => langs[lang][key],
		}),
		[lang],
	)

	return (
		<LangContext.Provider value={contextValue}>{children}</LangContext.Provider>
	)
}

export default LangContextProvider
