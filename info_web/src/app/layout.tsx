import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigationbar from "./Components/Navigation";
import Footer from "./Components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Eco-Threads Hub",
  description: "Online Marketplace for Recycled Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigationbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
