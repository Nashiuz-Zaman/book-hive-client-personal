// react router imports
import { createBrowserRouter } from "react-router-dom";

// layouts
import RootLayout from "../components/layouts/RootLayout";
import AuthLayout from "./../components/layouts/AuthLayout";
// page components
import Home from "../components/pages/Home/Home";
import LoginPage from "../components/pages/LoginPage/LoginPage";
import ErrorPage from "./../components/pages/ErrorPage/ErrorPage";
import RegistrationPage from "./../components/pages/RegistrationPage/RegistrationPage";
import AllBooks from "../components/pages/AllBooks/AllBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      {path: "/allBooks", element: <AllBooks />}
    ],
    errorElement: <ErrorPage />,
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
    path: "/registration",
    element: <AuthLayout />,
    children: [
      // registration route
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
    ],
  },
]);

export default router;
