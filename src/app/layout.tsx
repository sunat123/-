import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Wikipedia",
  description: "Wikipedia is a free online encyclopedia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2796903386018994"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}