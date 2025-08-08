import {Badge} from "@/components/ui/badge";
import {Code, Database, Shield, Zap} from "lucide-react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Translations, useLanguage} from "@/contexts/languaje-context";
import {Contribution} from "@/types/data";
import {GithubOriginal, MavenOriginal} from "devicons-react";

const translations: Translations = {
  es: {
    'contribution.badge': 'Open Source',
    'contribution.title': 'Contribuciones a la Comunidad',
    'contribution.subtitle': 'Compartimos herramientas que automatizan tareas comunes en desarrollo Java y Spring',
    'contribution.public': 'Público',
    'contribution.github': 'Ver en GitHub',
    'contribution.maven': 'Maven Central',
    'contribution.available': 'Disponibles en GitHub y Maven Central',
    'contribution.java-domain-commons.description': 'Librería que proporciona objetos de utilidad de dominio inmutables y reutilizables para paginación, ordenamiento y manejo de resultados paginados en aplicaciones Java.',
    'contribution.java-omni-search.description': 'Búsquedas dinámicas e inteligentes para entidades de dominio. Compatible con diferentes proveedores de bases de datos.',
    'contribution.spring-data-crud.description': 'Artefacto genérico basado en servicios para automatizar operaciones CRUD en aplicaciones Spring de manera eficiente.',
    'contribution.spring-web-problem-details.description': 'Proporciona manejo estandarizado de errores para aplicaciones Spring Web siguiendo RFC 9457 (Problem Details for HTTP APIs).',
    'contribution.show-all': 'Ver todas las contribuciones',
  },
  en: {
    'contribution.badge': 'Open Source',
    'contribution.title': 'Community Contributions',
    'contribution.subtitle': 'We share tools that automate common tasks in Java and Spring development',
    'contribution.public': 'Public',
    'contribution.github': 'View on GitHub',
    'contribution.maven': 'Maven Central',
    'contribution.available': 'Available on GitHub and Maven Central',
    'contribution.java-domain-commons.description': 'Library providing immutable and reusable domain utility objects for pagination, sorting and paginated result handling in Java applications.',
    'contribution.java-omni-search.description': 'Dynamic and intelligent searches for domain entities compatible with different database providers.',
    'contribution.spring-data-crud.description': 'Generic service-based artifact to automate CRUD operations in Spring applications efficiently.',
    'contribution.spring-web-problem-details.description': 'Provides standardized error handling for Spring Web applications following RFC 9457 (Problem Details for HTTP APIs).',
    'contribution.show-all': 'View all contributions',
  }
}

export default function Contributions() {
  const {t} = useLanguage(translations);
  
  const contributions: Contribution[] = [
    {
      name: 'java-domain-commons',
      description: t('contribution.java-domain-commons.description'),
      language: 'Java',
      languageColor: '#ff6900',
      icon: Code,
      distribution: {
        githubUrl: 'https://github.com/peluware/java-domain-commons',
        mavenUrl: 'https://central.sonatype.com/artifact/com.peluware/domain-commons'
      }
    },
    {
      name: 'java-omni-search',
      description: t('contribution.java-omni-search.description'),
      language: 'Java',
      languageColor: '#ff6900',
      icon: Zap,
      distribution: {
        githubUrl: 'https://github.com/peluware/java-omni-search',
        mavenUrl: 'https://central.sonatype.com/artifact/com.peluware/omni-search'
      }
    },
    {
      name: 'spring-data-crud',
      description: t('contribution.spring-data-crud.description'),
      language: 'Java',
      languageColor: '#ff6900',
      icon: Database,
      distribution: {
        githubUrl: 'https://github.com/peluware/spring-data-crud',
        mavenUrl: 'https://central.sonatype.com/artifact/com.peluware/spring-data-crud'
      }
    },
    {
      name: 'spring-web-problem-details',
      description: t('contribution.spring-web-problem-details.description'),
      language: 'Java',
      languageColor: '#ff6900',
      icon: Shield,
      distribution: {
        githubUrl: 'https://github.com/peluware/spring-web-problem-details',
        mavenUrl: 'https://central.sonatype.com/artifact/com.peluware/spring-web-problem-details'
      }
    }
  ];
  
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              <GithubOriginal className="h-3 w-3 mr-1"/>
              {t('contribution.badge')}
            </Badge>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t('contribution.title')}
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            {t('contribution.subtitle')}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mb-8">
          
          {contributions.map((contribution) => (
            <Card key={contribution.name} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <contribution.icon className="h-4 w-4 text-primary"/>
                    </div>
                    <CardTitle className="text-lg">{contribution.name}</CardTitle>
                  </div>
                  <Badge variant="outline" className="text-xs">{t('contribution.public')}</Badge>
                </div>
                <CardDescription>{contribution.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: contribution.languageColor
                      }}
                    />
                    <span className="text-sm text-muted-foreground">{contribution.language}</span>
                  </div>
                  <div>
                    {contribution.distribution.githubUrl &&
                      <Button variant="ghost" size="sm" className="group-hover:text-primary" asChild>
                        <a href={contribution.distribution.githubUrl} target="_blank" rel="noopener noreferrer">
                          <GithubOriginal className="h-4 w-4 mr-1"/>
                          {t('contribution.github')}
                        </a>
                      </Button>
                    }
                    {contribution.distribution.mavenUrl &&
                      <Button variant="ghost" size="sm" className="group-hover:text-primary" asChild>
                        <a href={contribution.distribution.mavenUrl} target="_blank" rel="noopener noreferrer">
                          <MavenOriginal className="h-4 w-4 mr-1"/>
                          {t('contribution.maven')}
                        </a>
                      </Button>
                    }
                  
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="mt-6 space-y-2">
            <p className="text-sm text-muted-foreground">
              {t('contribution.show-all')}
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/peluware" target="_blank" rel="noopener noreferrer">
                  <GithubOriginal className="h-4 w-4 mr-2"/>
                  {t('contribution.github')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}