import { Badge } from "@/components/ui/badge"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card";
import { useDataStore } from "@/stores/data.store";
import { UserButton, useUser } from "@clerk/clerk-react";
  
export default function NewUsers () {
    const {user} = useUser();

    const balance = useDataStore(state => state.balance);
    const expenses = useDataStore(state => state.expenses);
    const budgets = useDataStore(state => state.budgets);

    const saved = balance && expenses.expenses.length > 0 ? balance.amount / expenses.expenses.length : 0;

    let savedColor = "black";

    if(saved > 0) {
        savedColor = "green-500";
    } else {
        savedColor = "red-500";
    }

    return (
        <div>
            <h2 className="font-Poppins text-light text-body-text">Current Balance</h2>
            <div className="grid gap-4">
                <div className="w-full flex justify-between items-center">
                    <h2 className="text-6xl font-bold font-Poppins">${balance.amount || 0}.<span className="text-body-text">00</span></h2>
                    
                    {/* User information */}
                    <div className="flex p-5 justify-center items-center gap-2">
                        <UserButton />
                        <div className="grid">
                            <h2 className="text-md font-bold">{user?.fullName ? user.fullName : "User"}</h2>
                            <p className="font-light text-xs text-body-text">{user?.primaryEmailAddress?.emailAddress ? user.primaryEmailAddress?.emailAddress : "User"}</p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4">
                <HoverCard>
                    <HoverCardTrigger>
                        <Badge className={`flex bg-${savedColor} text-white font-semibold rounded-full px-10 text-xl py-2`}>
                            { budgets.budgets.length > 0 && balance.amount > 0 ? balance.amount / budgets.budgets.length : 0 }%
                            {
                                saved > 0 ?
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg> :
                                saved < 0 && 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            }
                        </Badge>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        <div className="grid gap-2">
                            <div className="flex gap-2 items-center">
                                <div className="p-4 rounded-xl text-white flex justify-center items-center bg-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                                    </svg>
                                </div>

                                <p className="text-xl"><span className="text-primary font-bold">4</span> Budgets</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="p-4 rounded-xl text-white flex justify-center items-center bg-danger">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </div>

                                <p className="text-xl"><span className="text-danger font-bold">13</span>Transactions Tracked</p>
                            </div>
                        </div>
                    </HoverCardContent>
                </HoverCard>
                    <Badge variant="outline" className="flex gap-4 text-white font-semibold rounded-full px-10 text-xl py-2">
                        <span className="font-light text-black">Saved:</span>
                        <span className={`text-${savedColor} text-black font-bold font-Poppin`}>${saved}</span>
                    </Badge>
                </div>  
            </div>
        </div>
    )
}