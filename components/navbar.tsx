"use client"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Link from "next/link"

export function Navbar() {
    return (
        <header className="w-full bg-background px-4 py-3 shadow-sm md:px-6 md:py-4">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2" prefetch={false}>
                    <BirdIcon className="h-6 w-6" />
                    <span className="text-3xl font-semibold">Chirp</span>
                </Link>
                <nav className="hidden items-center gap-4 md:flex">
                    <Link href="/" className="text-sm font-bold transition-colors hover:text-primary" prefetch={false}>
                        Home
                    </Link>
                    <Link href="#" className="text-sm font-bold transition-colors hover:text-primary" prefetch={false}>
                        Chirps
                    </Link>
                    <Link href="#" className="text-sm font-bold transition-colors hover:text-primary" prefetch={false}>
                        Profile
                    </Link>
                </nav>
                <SignedOut>
                    <Link
                        href="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-bold text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary/50 disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                    >
                        <SignInButton />
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </header>
    )
}

function BirdIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 7h.01" />
            <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
            <path d="m20 7 2 .5-2 .5" />
            <path d="M10 18v3" />
            <path d="M14 17.75V21" />
            <path d="M7 18a6 6 0 0 0 3.84-10.61" />
        </svg>
    )
}


function XIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}
