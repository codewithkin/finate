import { useDataStore } from "@/stores/data.store";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Progress } from "@/components/ui/progress"

export default function BudgetProgress () {
    const budgets = useDataStore(state => state.budgets);
    const expenses = useDataStore(state => state.expenses);

    return (
        <Card className="flex flex-col gap-2 w-full">
            <CardHeader>
                <h2 className="font-Inter text-2xl font-semibold">Progress</h2>
                <p className="text-body-text">How much of your budget you've used.</p>
            </CardHeader>

            <CardContent>
                {
                    budgets.length > 0 && expenses.length > 0 ?
                        budgets.map(budget => {
                            const percentage = budget.amount / 100 * expenses.length;
                            return (
                                <article>
                                    <p className="text-primary font-bold">{percentage}</p>
                                    <Progress
                                        color="#7148FC"
                                        value={percentage}
                                    />
                                </article>
                            )
                        })
                    :
                    <p className="text-body-text text-center">No data yet</p>
                }
            </CardContent>
        </Card>
    )
}