import prisma from "@/db";

export const POST = async (req: Request) => {
    try {
        const body = await req.json();
        const { title, content, authorId } = body;
        const post = await prisma.post.create({
            data: {
                title,
                content,
                authorId
            }
        });
        return new Response(JSON.stringify(post), { status: 200 });


    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 });
    }
};

export const GET = async () => {
    try {
        const posts = await prisma.post.findMany();
        return new Response(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
