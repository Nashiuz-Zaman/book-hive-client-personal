// react router imports
import { createBrowserRouter } from "react-router-dom";

// layouts
import RootLayout from "../components/layouts/RootLayout";
import AuthLayout from "./../components/layouts/AuthLayout";
// page components
import Home from "../components/pages/Home/Home";
import LoginPage from "../components/pages/LoginPage/LoginPage";
import RegistrationPage from "../components/pages/Registration/RegistrationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/login",
    element: <AuthLayout />,
    children: [
      // login route
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/register",
    element: <AuthLayout />,
    children: [
      // registration route
      {
        path: "/register",
        element: <RegistrationPage />,
      },
    ],
  },
]);

export default router;
