import { IconKeys } from "@/components/icons"

export type HeroHeader = {
  header: string
  tellText: string
  // headertag: string
  tell: string
  subheader: string
  image: string
}

export type Content = {
  text: string
  subtext: string
  image?: string;
  icon?: string;
}

export type ContentSection = {
  header: string
  subheader: string
  image?: string
  content: Array<Content>
}
