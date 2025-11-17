import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Leaflink - Your one stop place for all your links",
  description:
    "Leaflink is your all-in-one link management hub. Store, organize, and access all your essential links effortlessly from one streamlined platform. Perfect for personal use, teams, and businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionWrapper>
          <Navbar/>
          {children}
          <Footer/>
        </SessionWrapper>
      </body>
    </html>
  );
}


