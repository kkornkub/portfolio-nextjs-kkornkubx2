import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import BackgroundAnimation from "@/components/BackgroundAnimation"

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my personal portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${roboto.className}`}>
      <body>
        <BackgroundAnimation />
        <Header />
        <main className="container mx-auto px-4 relative z-10">{children}</main>
      </body>
    </html>
  )
}

