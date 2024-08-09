import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import DashBoard from "./pages/Dashboard/index";
import RootLayout from "./layouts/RootLayout";
import DashBoardLayout from "./layouts/DashBoardLayout";

// Auth pages
import SignInPage from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import BudgetPage from './pages/budgets';
import ComingSoon from './components/ComingSoon';
import NotFound from './components/NotFound';
import TransactionsPage from './pages/transactions';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "sign-in/*", element: <SignInPage /> },
      { path: "sign-up/*", element: <SignUp /> },
      {
        path: "dashboard/",
        element: <DashBoardLayout />,
        children: [
          {
            path: "",
            element: <DashBoard /> 
          },
          {
            path:"budgets",
            element: <BudgetPage />
          },
          {
            path:"careers",
            element: <ComingSoon />
          },
          {
            path:"settings",
            element: <ComingSoon />
          },
          {
            path:"transactions",
            element: <TransactionsPage />
          },
          {
            path:"ai",
            element: <ComingSoon />
          }
        ]
      },
      {
        path: "ai",
        element: <ComingSoon />
      },
      {
        path: "messages",
        element: <ComingSoon />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]);

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
