import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from "@mantine/core"
import "./globals.css"
import "@mantine/core/styles.css"
import { ReactNode } from "react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Manila Hearing Aid",
  description:
    "Manila Hearing Aid is the pioneer hearing aid center in the Philippines since 1976. Its staff is known to be warm, knowledgeable and competent.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  )
}
