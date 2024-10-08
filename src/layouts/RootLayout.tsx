import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { ClerkProvider, SignIn, SignedIn, SignedOut } from '@clerk/clerk-react'
import DashboardLayout from './DashBoardLayout';
import { Toaster } from "@/components/ui/sonner"

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

export default function RootLayout() {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
    >
      <SignedIn>
        <Navigate to="/dashboard/" />
        <Outlet />
      </SignedIn>
      <SignedOut>
        <main className="flex align-center p-10 items-center justify-center">
          <SignIn />
        </main>
      </SignedOut>
      <Toaster />
    </ClerkProvider>
  )
}