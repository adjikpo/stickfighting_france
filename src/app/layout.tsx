import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "France Stick Fighting - Kali Eskrima Arnis",
  description: "Fédération française de Kali Eskrima Arnis - Promouvoir le stick fighting en France et représenter la France dans les compétitions internationales",
  keywords: "kali, eskrima, arnis, stick fighting, france, fédération, arts martiaux, philippins, compétition",
  authors: [{ name: "France Stick Fighting" }],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: "France Stick Fighting",
    description: "Fédération française de Kali Eskrima Arnis",
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
