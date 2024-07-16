
import { Card } from "@/components/card";
import prisma from "@/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const getSingleData = async () => {

    try {
        const data = await prisma.post.findMany({
            orderBy: {
                //most recent first
                createdAt: "desc"
            }
        })

        return data;
    } catch (err) {
        console.log(err)

    }

}


export default async function Home() {
    const data = await getSingleData()
    return (
        <>
            <div className="flex flex-col justify-center gap-0 align-middle">
                <SignedIn>

                    {data.map((post) => <Card key={post.id} author={post.author} content={post.content} Id={post.id} />)}
                </SignedIn>
                <SignedOut>
                    <h1 className="text-3xl font-bold text-center">Sign in to view your chirps</h1>
                </SignedOut>
            </div>
        </>
    );
}
