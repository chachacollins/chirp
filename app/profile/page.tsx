import { Card } from "@/components/card";
import { ChirpInput } from "@/components/input";
import prisma from "@/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

const getSingleData = async (userId: string) => {

    try {
        const data = await prisma.post.findMany({
            where: {
                authorId: userId
            }
        })

        return data;
    } catch (err) {
        console.log(err)

    }

}


export default async function Page() {

    // Get the userId from auth() -- if null, the user is not signed in
    // Get the Backend API User object when you need access to the user's information
    const user = await currentUser()
    const userId = user?.id
    const userName = user?.username
    const data = await getSingleData(userId!)


    return (
        <>
            <SignedIn>
                <ChirpInput author={userName} authorId={userId} />

                {data.map((post) => <Card key={post.id} author={post.author} content={post.content} Id={post.id} />)}
            </SignedIn>
            <SignedOut>
                <h1 className="text-3xl font-bold text-center">Sign in to view your chirps</h1>
            </SignedOut>
        </>
    );

    // Use `user` to render user details or create UI elements
}
