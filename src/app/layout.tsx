import type {Metadata} from "next"
import {K2D} from 'next/font/google'
import "./globals.css"
import {PropsWithChildren} from "react";
import {LanguageProvider} from "@/contexts/languaje-context";

const k2d = K2D({
  subsets: ["latin"],
  weight: ["200", "400", "700"], // Elige los pesos que necesites
  variable: "--font-k2d", // Opcional: para usarla como variable CSS
});


export const metadata: Metadata = {
  title: "PeluWare - Desarrollo de Software",
  description: "Desarrollo de Software a persnalizado",
}

export default function RootLayout({children,}: Readonly<PropsWithChildren>) {
  return (
    <html lang="es">
    <body className={k2d.className}>
    <LanguageProvider>
      {children}
    </LanguageProvider>
    </body>
    </html>
  )
}
