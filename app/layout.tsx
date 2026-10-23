import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Doggy Splash Club | Private Dog Swimming & Secure Walking Field",
  description:
    "Enjoy a private dog swimming pool and a private, secure dog walking field at The Doggy Splash Club in Kings Langley.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
