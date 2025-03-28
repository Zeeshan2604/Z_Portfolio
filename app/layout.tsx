import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import CosmicBackground from "@/components/ui/CosmicBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zeeshan Shaikh",
  description: "Porfolio website of Zeeshan Shaikh the best freelance developer or programmer in thrissur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CosmicBackground>
            {children}
          </CosmicBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}