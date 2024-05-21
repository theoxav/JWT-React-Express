import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { rootLoader } from "./loaders/rootLoader.js";
import App from "./App.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const Signup = lazy(() => import("./pages/Signup/Signup.jsx"));
const Signin = lazy(() => import("./pages/Signin/Signin.jsx"));
const Profile = lazy(() => import("./pages/Profile/Profile.jsx"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
