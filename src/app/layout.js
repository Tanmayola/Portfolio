"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import BackgroundAnimation from "./components/BackgroundAnimation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tanmay Ola - Portfolio",
  description: "Personal portfolio website of Tanmay Ola - DevOps Engineer and Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BackgroundAnimation />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
