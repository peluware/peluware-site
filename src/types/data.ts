import {LucideIcon} from "lucide-react";
import {IconifyIcon} from "@iconify/react";


export interface Product {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  comingSoon?: boolean
}

export interface Technology {
  name: string
  icon: IconifyIcon
}


export interface Contribution {
  name: string
  description: string
  language: string
  languageColor: string
  icon: LucideIcon
  distribution: {
    githubUrl: string
    mavenUrl?: string
    npmUrl?: string
    dockerUrl?: string
    nugetUrl?: string
  }
}
