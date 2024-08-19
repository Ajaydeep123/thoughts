import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider';
import { GeistMono } from 'geist/font/mono';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invisibuzz",
  description: "Invisibuzz, a thoughts sharing platform, send and receive messages anonymously.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <AuthProvider>
      <body className={`${inter.className} ${GeistMono.variable} bg-white dark:bg-zinc-950`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
          <div className='isolate min-h-screen'>{children}</div>
        <Toaster/>
        </ThemeProvider>
      </body>
      </AuthProvider>
    </html>
  );
}
