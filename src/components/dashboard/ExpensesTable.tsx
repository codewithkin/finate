
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
    const expenseData = expenses.expenses;

    return (
        <>
        <h2 className="font-semibold text-xl my-4">Your expenses</h2>
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
                            <TableHead className="w-[100px]">Name</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Note</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Category</TableHead>
                        </TableRow>
                    </TableHeader>
                    {
                    expenseData.length > 0 &&
                    <TableBody>
                        {expenseData.map((expense: shape["expenses"]["expenses"]) => (
                            <TableRow key={expense.created_at}>
                                <TableCell className="font-medium">{expense.name}</TableCell>
                                <TableCell className="font-medium">{expense.amount}</TableCell>
                                <TableCell className="font-medium">{expense.note}</TableCell>
                                <TableCell className="font-medium">{expense.date}</TableCell>
                                <TableCell className="font-medium">{expense.category}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                }
            </Table>
        </>
    )
}
