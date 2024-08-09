
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

export default function ReceptionTable() {
    const receptions = useDataStore(state => state.receipts);

    const receptionData = receptions.receptions;

    return (
        <>
        <h2 className="font-semibold text-xl my-4">Money Recently received</h2>
        <Table>
            {
                receptionData.length > 0 ?
                <TableCaption>
                A list of money you've recently received.
                </TableCaption> :
                <TableCaption>No Receptions Yet</TableCaption>
            }
                        <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Reception Name</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Note</TableHead>
                            <TableHead>Date Created </TableHead>
                            <TableHead>Lasts Until</TableHead>
                            <TableHead className="text-right">Exceeded</TableHead>
                        </TableRow>
                    </TableHeader>
                    {
                    receptionData.length > 0 &&
                    <TableBody>
                        {receptionData.map((reception: shape["receipts"]["receptions"]) => (
                            <TableRow key={reception.created_at}>
                                <TableCell className="font-medium">{reception.created_at}</TableCell>
                                <TableCell className="font-medium">{reception.amount}</TableCell>
                                <TableCell className="font-medium">{reception.note}</TableCell>
                                <TableCell>{reception.endsOn}</TableCell>
                                <TableCell>{reception.priority}</TableCell>
                                <TableCell className="text-right">{reception.exceeded}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
}
            </Table>
        </>
    )
}
