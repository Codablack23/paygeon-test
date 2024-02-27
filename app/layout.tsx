import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css';
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.min.css"
import { AntdRegistry } from '@ant-design/nextjs-registry';
import ThemeContextProvider from "./contexts/ThemContext";
import GoogleTagScripts from "./utils/GoogleTagScripts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paygeon | Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagScripts/>
      <body className={inter.className}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KS7C82Q2"
          height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe>
        </noscript>
        <ThemeContextProvider>
          <AntdRegistry>{children}</AntdRegistry>
        </ThemeContextProvider>
        </body>
    </html>
  );
}
