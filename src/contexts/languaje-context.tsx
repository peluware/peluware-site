'use client'

import React, {createContext, useContext, useState, PropsWithChildren, useCallback, useMemo} from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({children}: Readonly<PropsWithChildren>) {
  const [language, setLanguage] = useState<Language>('es')
  
  const value = useMemo(() => ({
    language,
    setLanguage,
  }), [language])
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}


export type Translations = Record<Language, Record<string, string>>

export function useLanguage(translations?: Record<Language, Record<string, string>>): LanguageContextType & { t: (key: string) => string } {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  
  const {language, setLanguage} = context;
  
  const t = useCallback((key: string): string => {
    // Busca primero en las traducciones locales
    const translation = translations?.[language]?.[key]
    if (translation) {
      return translation
    }
    return key;
  }, [language, translations])
  
  return {language, setLanguage, t}
}