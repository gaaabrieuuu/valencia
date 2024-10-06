import type { Metadata } from "next";
import "./globals.css";
import { Maven_Pro } from "next/font/google";

const font = Maven_Pro({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valencia",
  description: "Valencia server page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={font.className}>{children}</body>
    </html>
  );
}
