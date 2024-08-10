import NewUsers from "@/components/dashboard/Overview";
import SavedChart from "@/components/dashboard/SavedChart";
import BudgetsTable from "@/components/dashboard/BudgetsTable";
import WelcomeCard from "@/components/ui/WelcomeCard";
import ExpenseTable from "@/components/dashboard/ExpensesTable";
import AICard from "@/components/dashboard/AIGreeting";

export default function DashBoard () {
    return (
        <article className="px-4 py-8 w-screen overflow-y-scroll h-screen">
            <NewUsers />

            {/* Graphical data */}
            <div className="md:flex gap-4 my-8">
                <WelcomeCard />
                <SavedChart />
                <AICard />
            </div>
            <BudgetsTable />
            <ExpenseTable />
        </article>
    )
}