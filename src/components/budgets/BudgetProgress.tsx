import { useDataStore } from "@/stores/data.store";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Progress } from "@/components/ui/progress"

export default function BudgetProgress () {
    const budgets = useDataStore(state => state.budgets);

    return (
        <Card className="flex flex-col gap-2 w-full">
            <CardHeader>
                <h2 className="font-Inter text-2xl font-semibold">Progress</h2>
                <p className="text-body-text">How much of your budget you've used.</p>
            </CardHeader>

            <CardContent>
                {
                    budgets.budgets.length > 0 ?
                    <article>
                        <p className="text-primary font-bold">50%</p>
                        <Progress
                            color="#7148FC"
                            value={50}
                        />
                    </article>
                    :
                    <p className="text-body-text">No budgets found.</p>
                }
            </CardContent>
        </Card>
    )
}