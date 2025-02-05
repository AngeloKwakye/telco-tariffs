import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from '@nextui-org/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MyCharges | Momo Calculator",
  description: "Calculate your mobile money transfer charges intsantly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
