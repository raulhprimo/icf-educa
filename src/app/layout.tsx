import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const futura = localFont({
  src: [
    {
      path: "../../public/fonts/futura/FuturaLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/futura/FuturaBook.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/futura/FuturaMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/futura/FuturaBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-futura",
});

export const metadata: Metadata = {
  title: "ICF Educa",
  description: "Plataforma de cursos ICF Educa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${futura.variable} font-sans`}>{children}</body>
    </html>
  );
}
