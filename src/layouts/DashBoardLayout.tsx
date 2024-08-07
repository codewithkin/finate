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
            const {data: balance} = await getData("balances", userId);

            // Get the user's expenses
            const {data: expenses} = await getData("expenses", userId);

            // Get the user's receipts
            const {data: receipts} = await getData("receptions", userId);

            // Get the user's budgets
            const {data: budgets} = await getData("budgets", userId);

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