import type { Metadata } from "next";
import { Trocchi, Spicy_Rice } from "next/font/google";
import "./globals.css";

const trocchi = Trocchi({
  variable: "--font-trocchi",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const spicyRice = Spicy_Rice({
  variable: "--font-spicy-rice",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Pose Club",
  description: "Little moments, forever memories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${trocchi.variable} ${spicyRice.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
