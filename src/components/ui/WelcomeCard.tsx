import { useUser } from "@clerk/clerk-react";
import { Card, CardContent, CardHeader, CardFooter } from "./card";
import { Link } from "react-router-dom";

export default function WelcomeCard () {
    const {user} = useUser();

    const date = new Date();
    const monthNumber = date.getMonth();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const month = months[monthNumber];
    const day = date.getDate().toString();

    return (
        <Card className=" p-8 max-w-[450px] p-0">
            <CardHeader className="pb-0">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-body-text text-sm">Take control of your finances</p>
                        <h2 className="font-bold text-2xl">Welcome back, {user?.firstName ? user.firstName : "user"}</h2>
                    </div>

                    <div className="rounded-lg bg-primary p-4 grid text-center justify-center items-center max-w-[60px] text-white">
                        <p className="font-semibold text-lg">{month.substring(0, 3)}</p>
                        <p className="text-3xl font-bold">{day}</p>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-body-text mt-4">You haven't started saving with us yet to get started, create your first budget, 
                add your baance or just explore everything the community has to offer!</p>
            </CardContent>
            <CardFooter className="flex gap-2">
                <Link className="flex hover:bg-purple-900 transition duration-500 gap-2 text-white font-semibold bg-primary rounded-md px-12 py-4" to="/plans">
                    Plans

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
                    </svg>
                </Link>
                <Link className="flex gap-2 text-white font-semibold bg-dark rounded-md px-12 py-4" to="/plans">
                    Basics
                </Link>
            </CardFooter>
        </Card>
    )
}