import Image from "next/image";
import Link from "next/link";
import {LanguageSelector} from "@/components/language-selector";
import {Button} from "@/components/ui/button";
import {Sheet, SheetContent, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Menu} from "lucide-react";
import {Translations, useLanguage} from "@/contexts/languaje-context";

const translations: Translations = {
  es: {
    'nav.products': 'Productos',
    'nav.features': 'Características',
    'nav.pricing': 'Precios',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'nav.login': 'Iniciar Sesión',
    'nav.trial': 'Únete',
  },
  en: {
    'nav.products': 'Products',
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.login': 'Sign In',
    'nav.trial': 'Join',
    
  }
}

export default function Header() {
  const {t} = useLanguage(translations)
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="PeluWare Logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <span className="text-2xl font-bold text-primary">PeluWare</span>
        </div>
        
        <nav className="hidden md:flex ml-auto space-x-6">
          <Link href={"#products"} className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.products')}
          </Link>
          <Link href={"#features"} className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.features')}
          </Link>
          <Link href={"#about-us"} className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.about')}
          </Link>
          <Link href={"#contact"} className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.contact')}
          </Link>
        </nav>
        
        <div className="hidden md:flex ml-6 space-x-2 items-center">
          <LanguageSelector/>
        </div>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden ml-auto">
              <Menu className="h-5 w-5"/>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle></SheetTitle>
            <div className="container flex flex-col space-y-4 ">
              <Link href={"#products"} className="text-sm font-medium">{t('nav.products')}</Link>
              <Link href={"#features"} className="text-sm font-medium">{t('nav.features')}</Link>
              <Link href={"#about-us"} className="text-sm font-medium">{t('nav.about')}</Link>
              <Link href={"#contact"} className="text-sm font-medium">{t('nav.contact')}</Link>
              <div className="flex flex-col space-y-2 pt-4">
                <LanguageSelector/>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}