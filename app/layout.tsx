import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: ['normal', 'italic'],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Infinity Silver Store - Home",
  description: "Finest 92.5 Sterling Silver, Crafted for Eternity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable} dark`}
    >
      <body className="font-body-md selection:bg-primary selection:text-on-primary">
        {children}
        <Toaster theme="dark" position="bottom-center" />
      </body>
    </html>
  );
}
