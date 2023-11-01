import { useContext } from 'react'

import { LangContext } from './LangProvider'
import { LangContextType } from './types'

const useTranslate = (): LangContextType['t'] => {
	const c = useContext(LangContext)
	return c.t
}

export default useTranslate
