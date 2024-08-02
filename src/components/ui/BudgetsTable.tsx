
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,

    TableRow,
} from "@/components/ui/table"

export default function BudgetTable() {
    const budgetData = [
        {
            name: "Groceries",
            amount: "$250.00",
            note: "The Groceries we buy this month should not exceed this amount",
            dateCreated: "1 August 2024",
            lastsUntil: "31 August 2024",
            exceeded: "No"
        },
        {
            name: "Eating Out",
            amount: "$100.00",
            note: "Budget for eating out this month",
            dateCreated: "1 August 2024",
            lastsUntil: "31 August 2024",
            exceeded: "Yes"
        },
        {
            name: "Fuel",
            amount: "$150.00",
            note: "Budget for fuel this month",
            dateCreated: "1 August 2024",
            lastsUntil: "31 August 2024",
            exceeded: "No"
        },
        {
            name: "Entertainment",
            amount: "$50.00",
            note: "Budget for movies, concerts, etc.",
            dateCreated: "5 August 2024",
            lastsUntil: "31 August 2024",
            exceeded: "No"
        },
        {
            name: "Shopping",
            amount: "$100.00",
            note: "Budget for clothes and other shopping",
            dateCreated: "10 August 2024",
            lastsUntil: "31 August 2024",
            exceeded: "Yes"
        },
        {
            name: "Travel",
            amount: "$300.00",
            note: "Budget for upcoming trip",
            dateCreated: "15 August 2024",
            lastsUntil: "15 September 2024",
            exceeded: "No"
        }
        // ... you can add more if you need
    ];

    return (
        <>
        <h2 className="font-semibold text-xl my-4">Your budgets</h2>
        <Table>
            <TableCaption>A list of your recently created budgets</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Budget Name</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Note</TableHead>
                    <TableHead>Date Created </TableHead>
                    <TableHead>Lasts Until</TableHead>
                    <TableHead className="text-right">Exceeded</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {budgetData.map((budget) => (
                    <TableRow key={budget.name}>
                        <TableCell className="font-medium">{budget.name}</TableCell>
                        <TableCell className="font-medium">{budget.amount}</TableCell>
                        <TableCell className="font-medium">{budget.note}</TableCell>
                        <TableCell>{budget.dateCreated}</TableCell>
                        <TableCell>{budget.lastsUntil}</TableCell>
                        <TableCell className="text-right">{budget.exceeded}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </>
    )
}
