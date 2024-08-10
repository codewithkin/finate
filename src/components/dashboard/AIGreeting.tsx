import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter } from "../ui/card";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
import { generateText } from "ai";
import { useEffect, useState } from "react";
import { createOpenAI } from '@ai-sdk/openai';
import { useDataStore } from "@/stores/data.store";

export default function AICard (){
    const [AIResponse, setAIResponse] = useState<string | null>(null);
    const navigate = useNavigate();

    const redirect = () => {
        navigate("/ai");
    }

    const budgets = useDataStore(state => state.budgets);
    const expenses = useDataStore(state => state.expenses);
    const receptions = useDataStore(state => state.receipts);

    const openai = createOpenAI({
        compatibility: "strict",
        apiKey: import.meta.env.VITE_PUBLIC_OPENAI_API_KEY,
        
    })

    useEffect(() => {
        const getAIResponse = async () => {
            const { text }  = await generateText({
                model: openai("gpt-3.5-turbo"),
                prompt: "Your name is finate, a friendly financial advisor AI, give me financial tips based on my spending data"
            })

            console.log("Reply: ", text);
            setAIResponse(text)
        }

        getAIResponse();
    }, [])

    return (
        <Card className="max-h-[310px] min-h=[310px]s">
            <article className="border-b border-body-text flex h-1/5 gap-2 p-4 items-center ">
                <Avatar>
                    <AvatarImage src="https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg" />
                    <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <article>
                    <h2 className="font-semibold text-xl text-primary">Finate</h2>
                </article>
            </article>

            <CardContent className="font-Inter p-4 font-light h-3/5 text-sm overflow-y-scroll">
                {
                    AIResponse && AIResponse
                }
            </CardContent>

            <CardFooter className="p-4 flex items-center justify-between h-1/5">
                <Input
                    onFocus={redirect}
                    placeholder="Type a reply..."
                    className="rounded-full w-full p-4"
                />
            </CardFooter>
        </Card>
    )
}