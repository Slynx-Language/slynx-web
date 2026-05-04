import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PageFrame from "../components/PageFrame";
import Header from "../components/header/header";
import { Footer } from "../components/footer/Footer";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Slynx",
	description: "Customizable, Fast & Efficient.",
	icons: {
		icon: "favicon.ico",
	},
};

import { ThemeProvider } from "./theme/provider";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	/**
	 * Root layout that wraps all pages with the ThemeProvider
	 * to enable consistent light/dark mode support.
	 */
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.variable} ${jetbrainsMono.variable}`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<PageFrame header={Header()} footer={Footer()}>
						{children}
					</PageFrame>
				</ThemeProvider>
			</body>
		</html>
	);
}
