import { useContext } from 'react'

import { LangContext } from './LangProvider'

const useTranslate = () => {
	const c = useContext(LangContext)
	return c.t
}

export default useTranslate
