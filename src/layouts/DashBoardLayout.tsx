import * as React from 'react'
import { useAuth } from "@clerk/clerk-react"
import { Outlet, useNavigate } from "react-router-dom"
import Nav from '@/components/Nav'
import { getData } from '@/utils/supabaseRequests'
import { useDataStore } from '@/stores/data.store'
import { shape } from '@/types/stores/data.type'

export default function DashboardLayout() {
    const { userId, isLoaded } = useAuth()
    const navigate = useNavigate()
    const { updateUserInfo } = useDataStore()

    console.log('test', userId)

    React.useEffect(() => {
        if (isLoaded && !userId) {
            navigate("/sign-in");
        }

        
        const fetchUserData = async () => {
            // Get the user's balances
            const {data} = await getData("balances", userId);

            const balance = data[0];

            const expensesData = await getData("expenses", userId);

            const expenses = data[0];

            const receiptsData = await getData("receipts", userId);

            const receipts = data[0];

            const budgetsData = await getData("budgets", userId);

            const budgets = data[0];

            updateUserInfo({
                balance,
                expenses,
                receipts,
                budgets
            })
        }

        fetchUserData();
    }, [isLoaded])

    if (!isLoaded) return "Loading..."

    return (
        <article className="flex font-Inter">
            <Nav />
            <Outlet />
        </article>
    )
}