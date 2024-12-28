"use client";

import React from "react";
import "./globals.css"; // Import your global styles

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Add meta tags for better SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ICE CODE</title>
        {/* Link to Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-gray-50 text-gray-800"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <div className="min-h-screen flex flex-col items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
