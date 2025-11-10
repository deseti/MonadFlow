import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MonadFlow - Discover dApps on Monad",
  description: "A 3D interactive discovery layer and AI-powered recommendation engine for Monad mainnet. Explore the ecosystem in an immersive way.",
  keywords: ["Monad", "dApps", "DeFi", "Web3", "Blockchain", "Discovery", "3D", "AI"],
  authors: [{ name: "MonadFlow Team" }],
  openGraph: {
    title: "MonadFlow - Discover dApps on Monad",
    description: "Explore Monad's ecosystem in 3D. AI-powered recommendations for discovering the best dApps.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MonadFlow - Discover dApps on Monad",
    description: "Explore Monad's ecosystem in 3D. AI-powered recommendations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
