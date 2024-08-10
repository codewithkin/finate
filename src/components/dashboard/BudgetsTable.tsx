
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useDataStore } from "@/stores/data.store";
import { shape } from "@/types/stores/data.type";

export default function BudgetTable() {
    const budgets = useDataStore(state => state.budgets);

    const budgetData = budgets[0];

    return (
        <>
        <h2 className="font-semibold text-xl my-4">Your budgets</h2>
        <Table>
            {
                budgetData ?
                <TableCaption>
                A list of your recently created budgets
                </TableCaption> :
                <TableCaption>No budgets Yet</TableCaption>
            }
                        <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Budget Name</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Note</TableHead>
                            <TableHead>Lasts Until</TableHead>
                            <TableHead className="text-right">Exceeded</TableHead>
                        </TableRow>
                    </TableHeader>
                    {
                    budgetData &&
                    <TableBody>
                        {budgetData.map((budget: shape["budgets"]) => (
                            <TableRow key={budget.note}>
                                <TableCell className="font-medium">{budget.name}</TableCell>
                                <TableCell className="font-medium">{budget.amount}</TableCell>
                                <TableCell className="font-medium">{budget.note}</TableCell>
                                <TableCell>{budget.endsOn}</TableCell>
                                <TableCell className="text-right">{budget.exceeded}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
}
            </Table>
        </>
    )
}
