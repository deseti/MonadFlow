import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MonadFlow - 3D Monad Ecosystem Explorer",
  description: "Immersive 3D visualization of the Monad ecosystem. Explore 100+ dApps, AI-powered recommendations, and real-time analytics. Experience the future of blockchain discovery.",
  keywords: ["Monad", "dApps", "DeFi", "Web3", "Blockchain", "Discovery", "3D", "AI", "Network Visualization", "Interactive"],
  authors: [{ name: "MonadFlow Team" }],
  openGraph: {
    title: "MonadFlow - 3D Monad Ecosystem Explorer",
    description: "Experience the Monad ecosystem like never before. Interactive 3D network visualization with 100+ dApps, AI recommendations, and real-time stats.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MonadFlow - 3D Monad Ecosystem Explorer",
    description: "Immersive 3D visualization of Monad's ecosystem. Explore 100+ dApps in stunning interactive 3D.",
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
