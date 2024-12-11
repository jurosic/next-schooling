// layout.tsx
import { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/NavBar";
import AuthProvider from "@/components/AuthProvider";
import { ThemeProvider } from "@/components/ThemeContext";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";

export const metadata: Metadata = {
  title: "HappyJoy",
  description: "Skibidi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <AuthProvider>
          <ThemeProvider>
            <ThemeToggleButton />
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
              <main style={{ flexGrow: 1 }}>
                {children}
              </main>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Navbar />
              </div>
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}