import TransactionsBreakdown from "@/components/transactions/TransactionsBreakdown";
import { TransactionsRatio } from "@/components/transactions/TransactionsRatio";
import { TransactionsTable } from "@/components/transactions/TransactionsTable";
import { useDataStore } from "@/stores/data.store"

export default function TransactionsPage () {
    const expenses = useDataStore(state => state.expenses);
    const receptions = useDataStore(state => state.receipts);

    const transactions = [...expenses.expenses, ...receptions.receptions];

    return (
        <article className="px-4 py-8 w-screen overflow-y-scroll h-screen">
            <h2 className="font-medium text-2xl font-Poppins pb-4">Transactions</h2>
            <article>
                <h2 className="md:text-4xl font-Inter font-semibold"><span className="text-primary font-bold">{transactions.length}</span> Total Transactions</h2>
                
                {/* Transactions breakdown */}
                <TransactionsBreakdown />

                <TransactionsTable />

                <TransactionsRatio />
            </article>
        </article>
    )
}