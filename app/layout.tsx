import "./globals.css"
import { siteConfig } from "@/config/site"
import { Inter } from "next/font/google"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { settings } from "@/config/settings"
import localFont from "next/font/local"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  metadataBase: new URL(siteConfig.url.base),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url.author,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: siteConfig.url.base,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@_rdev7",
  },
  icons: {
    icon: "/car1.jpg",
    shortcut: "/my-custom-icon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}
const yekan = localFont({
  src: [
    {
      path: "../fonts/BYekan.ttf",
      weight: "400",
    },
    {
      path: "../fonts/BYekanBold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-yekan",
})

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      dir="rtl"
      lang="fa"
      className={`${yekan.variable} !scroll-smooth `}
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-background text-primary ${yekan.variable}`}
      >
        {settings.themeToggleEnabled ? (
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        ) : (
          <ThemeProvider attribute="class" forcedTheme="light" enableSystem>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        )}
      </body>
    </html>
  )
}
