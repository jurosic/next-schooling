//./src/app/layout.tsx
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
        <div style={{minHeight: "90vh", display: "flex", flexDirection: "column"}}>
          <main style={{flexGrow: 1}}>
            {children}
          </main>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <BarováNavigácia></BarováNavigácia>
        </div>
      </body>
    </html>
  );
}
