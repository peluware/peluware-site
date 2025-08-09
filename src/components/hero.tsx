import {Button} from "@/components/ui/button";
import {ArrowRight, CheckCircle} from "lucide-react";
import {Translations, useLanguage} from "@/contexts/languaje-context";

const translations: Translations = {
  es: {
    'hero.title1': 'Soluciones de Software',
    'hero.title2': 'Innovadoras y Confiables',
    'hero.subtitle': 'En PeluWare creamos herramientas digitales que simplifican tu vida y hacen crecer tu negocio. Desde facturación electrónica hasta automatización de procesos.',
    'hero.cta1': 'Conoce Más',
    'hero.cta2': 'Agenda una Consulta',
    'hero.feature1': 'Precios flexibles y soluciones personalizadas',
    'hero.feature2': 'Para estudiantes, empresas y startups',
  },
  en: {
    'hero.title1': 'Innovative and Reliable',
    'hero.title2': 'Software Solutions',
    'hero.subtitle': 'At PeluWare we build digital tools that simplify your life and help your business grow. From electronic billing to process automation.',
    'hero.cta1': 'Learn More',
    'hero.cta2': 'Schedule a Call',
    'hero.feature1': 'Flexible pricing and custom solutions',
    'hero.feature2': 'For students, businesses & startups',
  }
};

export default function Hero() {
  const {t} = useLanguage(translations);
  
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-primary/10 to-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              {t('hero.title1')}
              <span className="text-primary block">{t('hero.title2')}</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {t('hero.subtitle')}
            </p>
          </div>
          <div className="space-x-4 space-y-2">
            <Button size="lg" className="h-12 px-8">
              {t('hero.cta1')}
              <ArrowRight className="ml-2 h-4 w-4"/>
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8">
              {t('hero.cta2')}
            </Button>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-muted-foreground mt-4">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-primary mr-1"/>
              {t('hero.feature1')}
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-primary mr-1"/>
              {t('hero.feature2')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
