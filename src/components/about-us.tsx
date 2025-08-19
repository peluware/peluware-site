import Image from "next/image";
import {Translations, useLanguage} from "@/contexts/languaje-context";

const translations: Translations = {
  es: {
    'about.title': 'Sobre PeluWare',
    'about.subtitle': 'Somos una empresa ecuatoriana especializada en soluciones de software confiables, seguras y escalables. Combinamos experiencia técnica, compromiso con el cliente y pasión por la tecnología.',
    'about.mission.title': 'Nuestra Misión',
    'about.mission.description': 'Impulsar la transformación digital de empresas mediante soluciones tecnológicas personalizadas, accesibles y de alta calidad.',
    'about.values.title': 'Nuestros Valores',
    'about.values.agility': 'Agilidad: Nos adaptamos rápido para entregar valor continuo',
    'about.values.quality': 'Calidad: Aplicamos altos estándares en cada entrega',
    'about.values.innovation': 'Innovación: Evolucionamos constantemente junto a la tecnología',
    'about.values.transparency': 'Transparencia: Comunicación abierta con nuestros clientes y proveedores',
    'about.values.commitment': 'Compromiso: Enfocados en resultados reales y medibles',
  },
  en: {
    'about.title': 'About PeluWare',
    'about.subtitle': 'We are an Ecuadorian company specialized in reliable, secure and scalable software solutions. We combine technical expertise, client commitment, and a passion for technology.',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'Drive the digital transformation of businesses through personalized, accessible and high-quality software solutions.',
    'about.values.title': 'Our Values',
    'about.values.agility': 'Agility: We adapt quickly to deliver continuous value',
    'about.values.quality': 'Quality: We apply high standards in every delivery',
    'about.values.innovation': 'Innovation: We constantly evolve alongside technology',
    'about.values.transparency': 'Transparency: Open communication with our clients and partners',
    'about.values.commitment': 'Commitment: Focused on real and measurable results',
  }
}

export default function AboutUs() {
  const {t} = useLanguage(translations);
  
  return (
    <section id="about-us" className="w-full py-12 md:py-20 lg:py-25">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t('about.title')}
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">{t('about.mission.title')}</h3>
              <p className="text-muted-foreground">
                {t('about.mission.description')}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">{t('about.values.title')}</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">{t('about.values.agility')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">{t('about.values.quality')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">{t('about.values.innovation')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">{t('about.values.transparency')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">{t('about.values.commitment')}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:justify-end ">
            <Image
              src="/logo-bg.png"
              alt="Pelusa - Nuestra Inspiración"
              width={200}
              height={200}
              className="w-64 h-64 object-contain rounded-4xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
