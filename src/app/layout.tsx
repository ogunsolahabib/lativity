import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const monteserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lativity - Digital Design Agency",
  description: "Get digital services at affordable prices to assist you in transforming your brand into a global competitor"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${monteserrat.className} text-l_black overflow-x-hidden`}>{children}</body>
    </html>
  );
}
