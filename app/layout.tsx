// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Bricolage_Grotesque } from 'next/font/google'
import { Space_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { ClerkProvider } from '@clerk/nextjs'
const fontHeading = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-heading',
})
import { dark } from '@clerk/themes';
const fontBody = Space_Mono({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
    variable: '--font-body',
})

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider appearance={{
            baseTheme: dark
        }}>
            <html lang="en">
                <body
                    className={cn(
                        'antialiased',
                        fontHeading.variable,
                        fontBody.variable
                    )}
                ><Navbar />
                    {children}
                </body>

            </html>
        </ClerkProvider>
    )
}
