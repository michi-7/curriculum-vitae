import { ReactNode } from 'react'

export type Lang = 'it' | 'en'

export type TranslateFunc = (k: TranslationKey) => string

export type LangContextType = {
	lang: Lang
	changeLang: () => void
	t: TranslateFunc
}

export type LangContextProviderProps = {
	children: ReactNode
}

export const translationKeys = [
	'birthDate',
	'birthPlace',
	'name',
	'personalInfo',
	'surname',
	'citizenship',
	'contacts',
] as const

export type TranslationKey = (typeof translationKeys)[number]

export type LanguageTranslation = Record<TranslationKey, string>
