// react router imports
import { createBrowserRouter } from "react-router-dom";

// layouts
import RootLayout from "../components/layouts/RootLayout";
import AuthLayout from "./../components/layouts/AuthLayout"
// page components
import Home from "../components/pages/Home/Home";
import LoginPage from "../components/pages/LoginPage/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "/",
    element: <Home /> },
  ],
  },
  {
    path: "/login",
    element: <AuthLayout/>,
    children: [
    // login route 
    {
      path:"/login",
      element:<LoginPage/>
    },
  ],
  },

]);

export default router;
