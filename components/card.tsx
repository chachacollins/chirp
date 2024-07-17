import Link from "next/link"
import DeleteButton from "./deleteButton"

type CardProps = {
    author: string,
    Id: string,
    content: string
    owner: boolean
}

function deletePost(id: string) {
    console.log("delete post", id)
}


export function Card({ author, Id, content, owner }: CardProps) {
    return (
        <div className="w-full bg-background mt-4">
            <div className="flex flex-col gap-4 mt-2 align-middle justify-center">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-lg bg-card p-6 shadow-sm">
                        <h3 className="text-lg font-semibold">{author}</h3>
                        <p className="mt-2 text-muted-foreground">{content}</p>
                        <div className="flex justify-between">
                            <div className="flex justify-start">
                                <Link
                                    href={`/chirp/${Id}`}
                                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/90"
                                    prefetch={false}
                                >
                                    View More
                                    <ArrowRightIcon className="h-4 w-4" />
                                </Link>
                            </div>
                            {owner ? <div className="flex justify-end">

                                <DeleteButton id={Id} />
                            </div>

                                : null
                            }
                        </div>



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

