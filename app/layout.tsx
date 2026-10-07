import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Doggy Splash Club | Dog Swimming Pool",
  description:
    "Doggy Splash Club is a welcoming dog swimming pool for safe, supervised swim sessions.",
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
