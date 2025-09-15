import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import {Toaster} from "@/components/ui/sonner";
import {HeroHeader} from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RichNote",
  description: "RichNote is a powerful note-taking app designed to help you stay organized and productive.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    ><ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={false}
      storageKey="theme"
    >
      <HeroHeader/>
      {children}
      <Toaster/>
    </ThemeProvider>
    </body>
    </html>
  );
}
