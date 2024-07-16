"use client"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import axios from "axios"
import { useState } from "react"

type ChirpInputProps = {
    author: string | undefined | null,
    authorId: string | undefined | null
}


export function ChirpInput({ author, authorId }: ChirpInputProps) {
    const [chirp, setChirp] = useState<string>("");
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const chirp = e.target.value
        console.log(chirp)

        setChirp(chirp)

    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {

            const response = await axios.post("/api/v1/post", { content: chirp, author: author, authorId: authorId })
            console.log("submitted succesfullly", response.data)
            console.log(chirp)
            setChirp("")
        } catch (err) {
            console.log(err);

        }
    }
    return (
        <div>
            <main className="container mx-auto py-8 px-4 md:px-6">
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <Label htmlFor="message" className="font-bold text-lg">Chirp</Label>
                        <Textarea id="message" placeholder="Enter your chirp" onChange={onChange} className="min-h-[100px]" />
                    </div>
                    <div className="flex justify-end">
                        <Button type="submit">Post</Button>
                    </div>
                </form>
            </main>
        </div>
    )
}
