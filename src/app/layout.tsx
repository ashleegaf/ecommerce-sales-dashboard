import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/ui/Navbar';
import Providers from '@/lib/providers';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Ecommerce Sales Dashboard',
    description: 'Display a product with related sales visualizations',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Providers>
            <html lang='en'>
                <body className={inter.className}>
                    <Navbar />
                    {children}
                </body>
            </html>
        </Providers>
    );
}
