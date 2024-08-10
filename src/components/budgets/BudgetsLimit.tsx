import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDataStore } from '@/stores/data.store';


export default function BudgetsLimit () {
    const budgets = useDataStore(state => state.budgets);
    console.log("Budgets: ", budgets);

    return (
        <Card className="grid justify-center items-center my-4">
            <CardHeader className="text-center">
                <CardTitle className="text-3xl font-semibold">Limits</CardTitle>
                <p>You can only create 10 budgets on the free plan</p>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
                 <div className="w-[100px] h-[100px] flex justify-center items-center">
                     <CircularProgressbar maxValue={100} value={budgets.length / 10 * 100} text={`${budgets.length / 10 * 100}%`} />
                </div>
            </CardContent>
        </Card>
    )
}