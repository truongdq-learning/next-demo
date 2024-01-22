import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { NextThemesProvider } from "~/providers/themes/next-themes-provider";
import { PropsWithChildren } from "react";
import { cn } from "~/lib/utils";
import { AntThemesProvider } from "~/providers/themes/ant-themes-provider";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <NextThemesProvider>
          <AntThemesProvider>{children}</AntThemesProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
