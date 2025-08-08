import React, {ComponentType} from "react";
import {LucideIcon} from "lucide-react";

type IconComponent = ComponentType<React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  color?: string;
}>

export interface ProductType {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  comingSoon?: boolean
}

export interface Technology {
  name: string
  icon: IconComponent
}


export interface Contribution {
  name: string
  description: string
  language: string
  languageColor: string
  icon: IconComponent
  distribution: {
    githubUrl: string
    mavenUrl?: string
    npmUrl?: string
    dockerUrl?: string
    nugetUrl?: string
  }
}
