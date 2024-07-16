import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ChirpInput() {
    return (
        <div>
            <main className="container mx-auto py-8 px-4 md:px-6">
                <form className="space-y-4">
                    <div>
                        <Label htmlFor="message" className="font-bold text-lg">Chirp</Label>
                        <Textarea id="message" placeholder="Enter your chirp" className="min-h-[100px]" />
                    </div>
                    <div className="flex justify-end">
                        <Button type="submit">Post</Button>
                    </div>
                </form>
            </main>
        </div>
    )
}
