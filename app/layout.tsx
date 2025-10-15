import type React from "react"
import type { Metadata } from "next"

import "./globals.css"
import { ClientLayout } from "./client-layout"
import { Inter, Inter as V0_Font_Inter, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _inter = V0_Font_Inter({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Calva Corro Abogados - Nada por la fuerza, todo por el derecho y la razón",
  description:
    "Firma de abogados especializada en derecho penal, civil, familiar, mercantil, amparo, laboral, fiscal, ambiental y corporativo. Comprometidos con la justicia y el servicio social.",
  keywords: "abogados, derecho, legal, México, amparo, penal, civil, familiar, mercantil",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
