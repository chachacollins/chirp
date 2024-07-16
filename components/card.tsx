import Link from "next/link"

type CardProps = {
    author: string,
    Id: string,
    content: string
}



export function Card({ author, Id, content }: CardProps) {
    return (
        <div className="w-full bg-background">
            <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-lg bg-card p-6 shadow-sm">
                        <h3 className="text-lg font-semibold">{author}</h3>
                        <p className="mt-2 text-muted-foreground">{content}</p>
                        <Link
                            href={`/chirp/${Id}`}
                            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/90"
                            prefetch={false}
                        >
                            View More
                            <ArrowRightIcon className="h-4 w-4" />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

function ArrowRightIcon(props: any) {
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
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}

