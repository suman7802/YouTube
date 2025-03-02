import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { ClerkProvider } from '@clerk/nextjs';

import './globals.css';

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'YouTube',
    description: 'YouTube clone built with Next.js',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider afterSignOutUrl='/'>
            <html lang='en'>
                <body className={`${inter.variable}`}>
                    {children}
                    <SpeedInsights />
                    <Analytics />
                </body>
            </html>
        </ClerkProvider>
    );
}
