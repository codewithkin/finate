import * as React from 'react'
import { useAuth } from "@clerk/clerk-react"
import { Outlet, useNavigate } from "react-router-dom"
import Nav from '@/components/Nav'
import { getData } from '@/utils/supabaseRequests'
import { useDataStore } from '@/stores/data.store'
import { useUtilsStore } from '@/stores/utils.store'

export default function DashboardLayout() {
    const { userId, isLoaded } = useAuth()
    const refetch = useUtilsStore(state => state.refetch);
    const navigate = useNavigate()
    const updateUserInfo = useDataStore(state => state.updateUserInfo);

    console.log('test', userId)

    React.useEffect(() => {
        if (isLoaded && !userId) {
            navigate("/sign-in");
        }

        const fetchUserData = async () => {
            // Get the user's balances
            const balance = await getData("balances", userId);

            // Get the user's expenses
            const expensesData = await getData("expenses", userId);

            // Get the user's receipts
            const receiptsData = await getData("receptions", userId);

            // Get the user's budgets
            const budgetsData = await getData("budgets", userId);

            const budgets = budgetsData.filter(budget =>{
                return budget.userId === userId;
            })

            const expenses = expensesData.filter(expense => expense.userId === userId)
            const receipts = receiptsData.filter(receipt => receipt.userId === userId)

            updateUserInfo({
                balance,
                expenses,
                receipts,
                budgets
            })
        }

        fetchUserData();
    }, [isLoaded, refetch])

    if (!isLoaded) return "Loading..."

    return (
        <article className="flex font-Inter">
            <Nav />
            <Outlet />
        </article>
    )
}