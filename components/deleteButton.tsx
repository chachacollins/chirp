"use client"



type deletePostProps = {
    id: string
}

async function deletePost(id: string) {
    console.log("delete post", id)

    try {
        const response = await fetch(`/api/v1/post`, {
            method: "DELETE",
            body: JSON.stringify({ id }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }


}

const DeleteButton = ({ id }: deletePostProps) => {
    return (
        <button
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/90"
            onClick={() => deletePost(id)}
        >
            Delete
        </button>
    )
}

export default DeleteButton
