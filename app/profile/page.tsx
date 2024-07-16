import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Page() {

    // Get the userId from auth() -- if null, the user is not signed in
    const { userId } = auth();

    if (userId) {
        console.log(userId);
        // Query DB for user specific information or display assets only to signed in users
    }

    // Get the Backend API User object when you need access to the user's information
    const user = await currentUser()
    console.log(user);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            hello world
        </main>
    );

    // Use `user` to render user details or create UI elements
}
