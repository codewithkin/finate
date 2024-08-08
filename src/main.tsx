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
          }
        ]
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
