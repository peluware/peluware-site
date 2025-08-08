import {Translations, useLanguage} from "@/contexts/languaje-context";
import {Technology} from "@/types/data";
import {CsharpPlain, DockerPlain, JavaPlain, NextjsPlain, SpringOriginal, TypescriptPlain, UnityPlain} from "devicons-react";

const translations: Translations = {
  es: {
    'tech.title': 'Tecnologías de Vanguardia',
    'tech.subtitle': 'Utilizamos las herramientas más modernas y confiables del mercado',
  },
  en: {
    'tech.title': 'Cutting-Edge Technologies',
    'tech.subtitle': 'We use the most modern and reliable tools in the market',
  }
}

const technologies: Technology[] = [
  {name: "Java", icon: JavaPlain},
  {name: "C#", icon: CsharpPlain},
  {name: "Spring", icon: SpringOriginal},
  {name: "Next.js", icon: NextjsPlain},
  {name: "Docker", icon: DockerPlain},
  {name: "Unity", icon: UnityPlain},
  {name: "TypeScript", icon: TypescriptPlain}
];

export default function Technologies() {
  const {t} = useLanguage(translations);
  
  // Duplicamos las tecnologías para el efecto infinito
  const duplicatedTechnologies = [...technologies, ...technologies];
  
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="py-2 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {t('tech.title')}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto leading-relaxed">
            {t('tech.subtitle')}
          </p>
        </div>
        
        {/* Contenedor del carrusel infinito */}
        <div className="relative overflow-hidden">
          {/* Gradientes en los bordes */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none"/>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none"/>
          
          {/* Carrusel infinito */}
          <div className="flex animate-infinite-scroll hover:[animation-play-state:paused]">
            {duplicatedTechnologies.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex flex-col items-center space-y-4 group cursor-pointer mx-8 flex-shrink-0 p-2"
              >
                {/* Contenedor del ícono */}
                <div className="relative">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-muted/80 to-muted/40 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-out border border-border/50">
                    <tech.icon
                      size={48}
                      className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                    />
                  </div>
                  {/* Efecto de brillo al hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                </div>
                
                {/* Nombre de la tecnología */}
                <span className="text-sm font-semibold text-center text-foreground/80 group-hover:text-foreground transition-colors duration-300 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
          @keyframes infinite-scroll {
              0% {
                  transform: translateX(0);
              }
              100% {
                  transform: translateX(-50%);
              }
          }

          .animate-infinite-scroll {
              animation: infinite-scroll 20s linear infinite;
          }

          .animate-infinite-scroll:hover {
              animation-play-state: paused;
          }
      `}</style>
    </section>
  );
}