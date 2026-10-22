import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WebAnalytics from "./components/WebAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
      <body className="min-h-full flex flex-col">{children}<WebAnalytics /></body>
    </html>
  );
}
