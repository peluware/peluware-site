'use client'

import {Button} from "@/components/ui/button"
import {Globe} from 'lucide-react'
import {useLanguage} from "@/contexts/languaje-context";

export function LanguageSelector() {
  const {language, setLanguage} = useLanguage()
  
  return (
    <div className="flex items-center space-x-1">
      <Globe className="h-4 w-4 text-muted-foreground"/>
      <Button
        variant={language === 'es' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('es')}
        className="h-8 px-2 text-xs"
      >
        ES
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="h-8 px-2 text-xs"
      >
        EN
      </Button>
    </div>
  )
}
