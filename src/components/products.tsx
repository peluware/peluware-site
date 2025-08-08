import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {CheckCircle, Clock, Code} from "lucide-react";
import {Translations, useLanguage} from "@/contexts/languaje-context";
import {ProductType} from "@/types/data";

const translations: Translations = {
  es: {
    'products.title': 'Nuestro Producto',
    'products.subtitle': 'La herramienta que necesitas para gestionar tu facturación',
    'products.billing.title': 'PeluWare Billing',
    'products.billing.description': 'Sistema completo de facturación electrónica para Ecuador con gestión de inventario y proveedores',
    'products.billing.feature1': 'Facturación electrónica SRI',
    'products.billing.feature2': 'Control de inventarios',
    'products.billing.feature3': 'Gestión de proveedores',
    'products.billing.feature4': 'Reportes fiscales',
    'products.coming-soon': 'Próximamente',
  },
  en: {
    'products.title': 'Our Product',
    'products.subtitle': 'The tool you need to manage your billing',
    'products.billing.title': 'PeluWare Billing',
    'products.billing.description': 'Complete electronic billing system for Ecuador with inventory management and suppliers',
    'products.billing.feature1': 'SRI electronic billing',
    'products.billing.feature2': 'Inventory control',
    'products.billing.feature3': 'Supplier management',
    'products.billing.feature4': 'Tax reports',
    'products.coming-soon': 'Coming Soon',
  }
}


export default function Products() {
  const {t} = useLanguage(translations)
  
  const products: ProductType[] = [
    {
      icon: Code,
      title: t('products.billing.title'),
      description: t('products.billing.description'),
      features: [
        t('products.billing.feature1'),
        t('products.billing.feature2'),
        t('products.billing.feature3'),
        t('products.billing.feature4')
      ],
      comingSoon: true
    }
  ];
  
  return (
    <section id="products" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t('products.title')}
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            {t('products.subtitle')}
          </p>
        </div>
        <div className="flex justify-center">
          <div className="max-w-md w-full">
            {products.map(product => (
              <Card key={product.title} className="relative overflow-hidden">
                {product.comingSoon && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      <Clock className="h-3 w-3 mr-1"/>
                      {t('products.coming-soon')}
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <product.icon className="h-6 w-6 text-primary"/>
                  </div>
                  <CardTitle>{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2"/>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}