'use client';

import './globals.css'; // Import your global styles
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Add meta tags for better SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ICE CODE</title>
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-800`}>
        {/* Provide a container for the content */}
        <div className="min-h-screen flex flex-col items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
