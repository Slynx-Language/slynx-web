import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"
import PageFrame from "./components/PageFrame";
import Header from "./components/header/header";
import { Footer } from "./components/footer/Footer";
import { ThemeProvider } from "./theme/provider";
import { LangProvider } from "./i18n/LangContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Slynx",
  description: "A data-oriented UI language for building cross-platform interfaces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <LangProvider>
          <ThemeProvider>
            <PageFrame header={<Header />} footer={<Footer />}>
              {children}
            </PageFrame>
          </ThemeProvider>
        </LangProvider>
      </body>
    </html>
  );
}
