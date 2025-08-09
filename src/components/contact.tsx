'use client'

import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import * as z from 'zod'
import {useRef, useState} from 'react'
import {Turnstile, TurnstileInstance} from '@marsidev/react-turnstile'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {LoaderCircle, Mail, MapPin, Phone, Send} from "lucide-react";
import {Translations, useLanguage} from "@/contexts/languaje-context";
import githubIcon from "@iconify/icons-devicon/github";
import linkedinIcon from "@iconify/icons-devicon/linkedin";
import twitterIcon from "@iconify/icons-devicon/twitter";
import {Icon} from "@iconify/react";
import useIsMobile from "@/hooks/use-is-mobile";

const schema = z.object({
  nombre: z.string().min(2),
  empresa: z.string().optional(),
  email: z.email(),
  mensaje: z.string().min(5),
  captcha: z.string().min(1, "Debes completar el captcha")
})

const translations: Translations = {
  es: {
    'contact.title': 'Transforma tu idea en realidad',
    'contact.subtitle': 'Tú tienes la idea, nosotros la ponemos en ejecución. Cuéntanos qué necesitas.',
    'contact.info': 'Información de Contacto',
    'contact.follow': 'Síguenos',
    'contact.form.title': 'Contáctanos',
    'contact.form.subtitle': 'Soluciones personalizadas para personas, negocios, startups o proyectos escolares.',
    'contact.form.name': 'Nombre',
    'contact.form.company': 'Empresa/Negocio',
    'contact.form.email': 'Email',
    'contact.form.message': 'Mensaje',
    'contact.form.placeholder.name': 'Tu nombre',
    'contact.form.placeholder.company': 'Tu empresa o negocio (opcional)',
    'contact.form.placeholder.email': 'tu@email.com',
    'contact.form.placeholder.message': 'Cuéntanos qué necesitas...',
    'contact.form.send': 'Enviar Mensaje',
  },
  en: {
    'contact.title': 'Turn your idea into reality',
    'contact.subtitle': 'You have the  , we bring it to life. Tell us what you need.',
    'contact.info': 'Contact Information',
    'contact.follow': 'Follow Us',
    'contact.form.title': 'Contact Us',
    'contact.form.subtitle': 'Custom solutions for individuals, businesses, startups, or academic projects.',
    'contact.form.name': 'Name',
    'contact.form.company': 'Company/Business',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.placeholder.name': 'Your name',
    'contact.form.placeholder.company': 'Your company or business (optional)',
    'contact.form.placeholder.email': 'your@email.com',
    'contact.form.placeholder.message': 'Tell us what you need...',
    'contact.form.send': 'Send Message',
  }
}


export default function Contact() {
  const {t} = useLanguage(translations)
  const isMobile = useIsMobile();
  
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      nombre: "",
      empresa: "",
      email: "",
      mensaje: "",
      captcha: "",
    },
  })
  const turnstileRef = useRef<TurnstileInstance>(null)
  
  const [captchaReady, setCaptchaReady] = useState(false)
  const [dialog, setDialog] = useState({
    open: false,
    success: false,
    message: "",
  })
  
  const onSubmit = async (values: z.infer<typeof schema>) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
      
      const data = await res.json()
      
      if (!res.ok) {
        setDialog({
          open: true,
          success: false,
          message: data?.error || "Hubo un error al enviar el formulario",
        })
        return
      }
      
      setDialog({
        open: true,
        success: true,
        message: "Formulario enviado con éxito",
      })
      
      form.reset()
      turnstileRef.current?.reset()
      setCaptchaReady(false)
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      setDialog({
        open: true,
        success: false,
        message: "Ocurrió un error inesperado",
      })
    }
  }
  
  
  return (
    <>
      <section
        id="contact"
        className="w-full py-12 md:py-20 lg:py-25 bg-muted/50 "
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t('contact.title')}
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              {t('contact.subtitle')}
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6 w-full">
              <div>
                <h3 className="text-xl font-semibold mb-4">{t('contact.info')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary"/>
                    <span>contacto@peluware.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary"/>
                    <span>+593 93 925 7628</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary"/>
                    <span>Santo Domingo, Ecuador</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{t('contact.follow')}</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://twitter.com/peluware" target="_blank" rel="noopener noreferrer">
                      <Icon icon={twitterIcon} className="h-4 w-4"/>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://www.linkedin.com/company/peluware" target="_blank" rel="noopener noreferrer">
                      <Icon icon={linkedinIcon} className="h-4 w-4"/>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://github.com/peluware" target="_blank" rel="noopener noreferrer">
                      <Icon icon={githubIcon} className="h-4 w-4"/>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            <Card className="w-full max-w-full ">
              <CardHeader>
                <CardTitle>{t('contact.form.title')}</CardTitle>
                <CardDescription>{t('contact.form.subtitle')}</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="nombre"
                        render={({field}) => (
                          <FormItem>
                            <FormLabel>{t('contact.form.name')}</FormLabel>
                            <FormControl>
                              <Input placeholder={t('contact.form.placeholder.name')} {...field} />
                            </FormControl>
                            <FormMessage/>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="empresa"
                        render={({field}) => (
                          <FormItem>
                            <FormLabel>{t('contact.form.company')}</FormLabel>
                            <FormControl>
                              <Input placeholder={t('contact.form.placeholder.company')} {...field} />
                            </FormControl>
                            <FormMessage/>
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel>{t('contact.form.email')}</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder={t('contact.form.placeholder.email')} {...field} />
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="mensaje"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel>{t('contact.form.message')}</FormLabel>
                          <FormControl>
                            <Textarea placeholder={t('contact.form.placeholder.message')} rows={4} {...field} />
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="captcha"
                      render={({field}) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Captcha</FormLabel>
                          <FormControl className="items-center mx-auto">
                            <Turnstile
                              ref={turnstileRef}
                              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                              onSuccess={(token) => {
                                field.onChange(token)
                                setCaptchaReady(true)
                              }}
                              options={{
                                size: isMobile ? "compact" : "normal",
                              }}
                            />
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" disabled={!captchaReady}>
                      {form.formState.isSubmitting
                        ? <LoaderCircle className="animate-spin h-4 w-4 mr-2"/>
                        : <Send className="h-4 w-4 mr-2"/>
                      }
                      {t('contact.form.send')}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Dialog open={dialog.open} onOpenChange={(open) => setDialog((d) => ({...d, open}))}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {dialog.success ? "✅ Enviado" : "❌ Error"}
            </DialogTitle>
            <DialogDescription>
              {dialog.message}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}
