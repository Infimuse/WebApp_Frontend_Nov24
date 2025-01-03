// app/layout.tsx or app/RootLayout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css";
// import { Toaster } from "sonner";
import GlobalNavbar from "@/components/GlobalNavbar";
import BottomNav from "@/components/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infimuse",
  description: "Infimuse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: "#fff",
        }}
        className={inter.className}
      >
        <div className="max-h-screen sm:max-h-auto">
          <GlobalNavbar />
          <div className="sm:py-16">{children}</div>
          <BottomNav /> {/* Add the BottomNav here */}
        </div>
      </body>
    </html>
  );
}
