import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";
import WebAnalytics from "./components/WebAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const organization = {
  "@context": "https://schema.org", "@type": "Organization",
  "@id": "https://www.vortexdynamics.es/#organization",
  name: "Vortex Dynamics IT Consulting", alternateName: "Vortex Dynamics",
  url: "https://www.vortexdynamics.es/", logo: "https://www.vortexdynamics.es/icon.png",
  email: "direccion-proyectos@vortexdynamics.es", telephone: "+34951547626",
  description: "Consultoría, implantación e integración de soluciones del ecosistema Microsoft.",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vortexdynamics.es"),
  robots: { index: true, follow: true },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
  verification: { google: "oyaXK5ucD3iInWuX1K78Y0fzs9uoiYYCGU8-J1uQCx8" },
  title: "Vortex Dynamics | Business Central y Dynamics 365 CRM",
  description: "Consultoría e implantación de ERP, CRM y Power Platform para conectar los procesos de tu empresa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><StructuredData data={organization} />{children}<WebAnalytics /></body>
    </html>
  );
}
