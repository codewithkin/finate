
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

export default function ExpenseTable() {
    const expenses = useDataStore(state => state.expenses);

    const expenseData = expenses;

    return (
        <>
        <h2 className="font-semibold text-xl my-4">Expenses</h2>
        <Table>
            {
                expenseData.length > 0 ?
                <TableCaption>
                A list of your recently created expenses
                </TableCaption> :
                <TableCaption>No expenses Yet</TableCaption>
            }
                        <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">expense Name</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Note</TableHead>
                            <TableHead>Date Created </TableHead>
                            <TableHead>Lasts Until</TableHead>
                            <TableHead className="text-right">Exceeded</TableHead>
                        </TableRow>
                    </TableHeader>
                    {
                    expenseData.length > 0 &&
                    <TableBody>
                        {expenseData.map((expense: shape["expenses"]) => (
                            <TableRow key={expense.created_at}>
                                <TableCell className="font-medium">{expense.created_at}</TableCell>
                                <TableCell className="font-medium">{expense.amount}</TableCell>
                                <TableCell className="font-medium">{expense.note}</TableCell>
                                <TableCell>{expense.endsOn}</TableCell>
                                <TableCell>{expense.priority}</TableCell>
                                <TableCell className="text-right">{expense.exceeded}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
}
            </Table>
        </>
    )
}
