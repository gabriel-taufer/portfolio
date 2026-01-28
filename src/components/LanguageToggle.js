import * as React from 'react';

import { useTranslation } from 'react-i18next';

import { Settings } from 'luxon'


const LanguageToggle = () => {
  const { i18n } = useTranslation()

  const changeLanguageHandler = () => {
    const oppositeLanguage = i18n.language === 'en' ? 'br' : 'en'

    i18n.changeLanguage(oppositeLanguage)
    Settings.defaultLocale = i18n.language === 'br' ? 'pt-BR' : 'en'

    localStorage.setItem("page_language", oppositeLanguage)

  }

  return (
    <img
      id="language-toggle"
      onClick={changeLanguageHandler}
      src={i18n.language === "en" ? "brazil_flag.png" : "usa_flag.png"}
      alt={i18n.language}
      height="24"
      width="24"
    />
  )
}

export default LanguageToggle;