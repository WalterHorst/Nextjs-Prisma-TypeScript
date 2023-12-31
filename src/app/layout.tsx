import type { Metadata } from "next";
import "./layout.css";

import NavBar from "@/components/NavBar/NavBar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="layout">
      <body>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
