import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/wrapper/Layout";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project Name",
  description: "One Line Project Description.",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "next14", "pwa", "next-pwa"],
  themeColor: [
    {
      media: "",
      color: "#fff",
    },
  ],
  authors: [
    {
      name: "",
      url: "",
    },
  ],
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/assets/icon/icon-128.png",
    },
    { rel: "icon", url: "/assets/icon/icon-128.png" },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          {children}
          <Toaster />
        </Layout>
      </body>
    </html>
  );
}
