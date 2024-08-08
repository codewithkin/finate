import BudgetsLimit from "@/components/budgets/BudgetsLimit";
import BudgetsOverview from "@/components/budgets/BudgetsOverview";
import { BudgetsTable } from "@/components/budgets/BudgetsTable";

export default function BudgetPage () {
    return (
        <article className="px-4 py-8 w-screen overflow-y-scroll h-screen">
            <h2 className="font-medium text-2xl font-Poppins pb-4">Your Budgets</h2>

            <article className="flex items-center gap-4 w-full">
                <BudgetsOverview />
                <BudgetsLimit />
            </article>


            <BudgetsTable  />

            <article className="flex w-full">

            </article>
        </article>
    )
}