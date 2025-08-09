import Image from "next/image";
import Link from "next/link";
import {Translations, useLanguage} from "@/contexts/languaje-context";

const transalations: Translations = {
  es: {
    'footer.description': 'Software personalizado para tu negocio. Calidad, seguridad y escalabilidad garantizadas.',
    'footer.products': 'Productos',
    'footer.company': 'Empresa',
    'footer.support': 'Soporte',
    'footer.careers': 'Carreras',
    'footer.blog': 'Blog',
    'footer.docs': 'Documentación',
    'footer.help': 'Centro de Ayuda',
    'footer.status': 'Estado del Sistema',
    'footer.api': 'API',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.terms': 'Términos de Servicio',
    'footer.privacy': 'Política de Privacidad',
    'products.billing.title': 'PeluWare Billing',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
  },
  en: {
    'footer.description': 'Custom software for your business. Guaranteed quality, security, and scalability.',
    'footer.products': 'Products',
    'footer.company': 'Company',
    'footer.support': 'Support',
    'footer.careers': 'Careers',
    'footer.blog': 'Blog',
    'footer.docs': 'Documentation',
    'footer.help': 'Help Center',
    'footer.status': 'System Status',
    'footer.api': 'API',
    'footer.rights': 'All rights reserved.',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    'products.billing.title': 'PeluWare Billing',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
  }
}


export default function Footer() {
  const {t} = useLanguage(transalations)
  
  return (
    <footer className="w-full py-6 bg-background border-t">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="PeluWare Logo"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-bold text-primary">PeluWare</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('footer.description')}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">{t('footer.products')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary">{t('products.billing.title')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href={"#about-us"} className="hover:text-primary">{t('nav.about')}</Link></li>
              <li><Link href="#" className="hover:text-primary">{t('footer.careers')}</Link></li>
              <li><Link href="#" className="hover:text-primary">{t('footer.blog')}</Link></li>
              <li><Link href={"#contact"} className="hover:text-primary">{t('nav.contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">{t('footer.support')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary">{t('footer.docs')}</Link></li>
              <li><Link href="#" className="hover:text-primary">{t('footer.help')}</Link></li>
              <li><Link href="#" className="hover:text-primary">{t('footer.status')}</Link></li>
              <li><Link href="#" className="hover:text-primary">{t('footer.api')}</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 mt-8 border-t">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} PeluWare. {t('footer.rights')}
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
              {t('footer.terms')}
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
              {t('footer.privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}