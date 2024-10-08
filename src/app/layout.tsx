import type { Metadata } from "next";
import "./globals.css";

import BarováNavigácia from "@/components/NavBar"

export const metadata: Metadata = {
  title: "HappyJoy",
  description: "Made by Juraj Janosik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <BarováNavigácia></BarováNavigácia>
      </body>
    </html>
  );
}
