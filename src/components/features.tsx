import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Users, Layers3, Settings } from "lucide-react";
import Image from "next/image";
import { Translations, useLanguage } from "@/contexts/languaje-context";

const translations: Translations = {
  es: {
    'features.badge': '¿Por qué elegirnos?',
    'features.title': 'Calidad, seguridad y escalabilidad garantizadas',
    'features.subtitle': 'Creamos soluciones tecnológicas robustas, seguras y adaptables, cumpliendo con los más altos estándares del sector.',
    'features.agile.title': 'Metodologías Ágiles',
    'features.agile.description': 'Colaboración cercana con el cliente, entregas iterativas y mejora continua.',
    'features.security.title': 'Seguridad Integrada',
    'features.security.description': 'Cumplimiento con estándares OWASP y análisis constante de vulnerabilidades.',
    'features.scalability.title': 'Escalabilidad y Tecnología Moderna',
    'features.scalability.description': 'Arquitecturas modulares, tecnologías cloud-native y prácticas DevOps.',
    'features.customization.title': 'Flexibilidad y Personalización',
    'features.customization.description': 'Despliegue en tu propia infraestructura o en la nube. Transparencia con proveedores y soluciones a tu medida.',
  },
  en: {
    'features.badge': 'Why choose us?',
    'features.title': 'Guaranteed quality, security, and scalability',
    'features.subtitle': 'We build robust, secure, and adaptable software solutions, aligned with the highest industry standards.',
    'features.agile.title': 'Agile Methodologies',
    'features.agile.description': 'Close collaboration with clients, iterative delivery and continuous improvement.',
    'features.security.title': 'Built-in Security',
    'features.security.description': 'OWASP-compliant practices and continuous vulnerability assessments.',
    'features.scalability.title': 'Scalability & Modern Tech',
    'features.scalability.description': 'Modular architectures, cloud-native technologies, and DevOps practices.',
    'features.customization.title': 'Flexibility & Customization',
    'features.customization.description': 'Deploy in your own infrastructure or cloud. Transparent vendor communication and tailored solutions.',
  }
};

export default function Features() {
  const { t } = useLanguage(translations);
  
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <Badge variant="secondary">{t('features.badge')}</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {t('features.title')}
            </h2>
            <p className="text-muted-foreground md:text-lg">
              {t('features.subtitle')}
            </p>
            <div className="grid gap-4">
              {/* Agile */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{t('features.agile.title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('features.agile.description')}</p>
                </div>
              </div>
              {/* Security */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{t('features.security.title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('features.security.description')}</p>
                </div>
              </div>
              {/* Scalability */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Layers3 className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{t('features.scalability.title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('features.scalability.description')}</p>
                </div>
              </div>
              {/* Customization */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Settings className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{t('features.customization.title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('features.customization.description')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:justify-end justify-center">
            <Image
              src="/logo-bg.png"
              alt="PeluWare Logo"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
