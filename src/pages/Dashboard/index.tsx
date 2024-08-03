import NewUsers from "@/components/dashboard/Overview";
import SavedChart from "@/components/ui/SavedChart";
import BudgetsTable from "@/components/ui/BudgetsTable";
import WelcomeCard from "@/components/ui/WelcomeCard";

export default function DashBoard () {
    return (
        <article className="px-4 py-8 w-screen overflow-y-scroll h-screen">
            <NewUsers />

            {/* Graphical data */}
            <div className="md:flex grid gap-4 my-8">
                <WelcomeCard />
                <SavedChart />
            </div>
            <BudgetsTable />
        </article>
    )
}