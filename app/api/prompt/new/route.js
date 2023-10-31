import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
    const { userId, prompt, tag} = await req.json(); //extract all the data from the request body

    try {
        await connectToDB(); //have to connect everytime
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag,
        })

        await newPrompt.save(); //save to database

        return new Response(JSON.stringify(newPrompt), {status: 201})
    } catch (error) {
        return new Response("Internal Server Error", {status: 500})
    }
}