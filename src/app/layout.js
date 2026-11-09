import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ClientLayout from "./components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tanmay Ola | Information Security & VAPT Consultant | DevOps & Cloud",
  description: "Portfolio of Tanmay Ola - Information Security and VAPT professional, AWS Cloud & DevOps Engineer with 50+ OT VAPT reports delivered.",
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
