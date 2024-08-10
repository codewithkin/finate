import { useDataStore } from "@/stores/data.store"

export default function TransactionsBreakdown () {
    const expenses = useDataStore(state => state.expenses);
    const receptions = useDataStore(state => state.receipts);

    return (
        <article className="flex my-4 items-center gap-4 p-4 w-fit border-t border-b border-gray-300">
            <article className="px-4 py-2 flex gap-4 items-center">
                <div className="p-2 rounded-full text-white shadow-md bg-danger flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                </div>

                <div>
                    <h2 className="font-bold text-3xl font-Inter">
                        {expenses.length}
                    </h2>
                    <h3 className="font-Inter">
                        Expenses
                    </h3>
                </div>
            </article>
            <article className="border-l-2 flex gap-4 items-center border-gray-300 px-4 py-2">
            <div className="p-2 rounded-full text-white shadow-md bg-secondary flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

                </div>

                <div>
                    <h2 className="font-bold text-3xl font-Inter">
                        {receptions.length}
                    </h2>
                    <h3 className="font-Inter">
                        Receptions
                    </h3>
                </div>
            </article>
        </article>
    )
}