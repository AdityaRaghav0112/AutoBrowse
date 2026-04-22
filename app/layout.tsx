import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutoBrowse – AI Browser Automation",
  description: "Automate any browser task with plain English. Powered by AI agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-[#fafafa] text-[#171717] selection:bg-black/10 selection:text-black">
      <div className="absolute top-0 w-full z-50">
                <Header />
              </div>
        {children}
      </body>
    </html>
  );
}
