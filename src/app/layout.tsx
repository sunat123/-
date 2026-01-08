import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Wikipedia",
  description: "Wikipedia is a free online encyclopedia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          data-ad-client="ca-pub-2796903386018994"
          async
          crossOrigin="anonymous"
        />
      </head>

      <body className="antialiased">

        {/* AdSense block */}
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-format="autorelaxed"
          data-ad-client="ca-pub-2796903386018994"
          data-ad-slot="8353330755"
        />

        <Script id="adsbygoogle-init" strategy="afterInteractive">
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </Script>

        {children}
      </body>
    </html>
  );
}


