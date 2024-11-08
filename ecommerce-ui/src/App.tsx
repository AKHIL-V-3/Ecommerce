import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage";
import SignInPage from "./pages/signinpage";
import Textfieldtest from "./pages/textfieldtest";
import SignUpPage from "./pages/signuppage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/register",
    element: <SignUpPage />,
  },
  {
    path: "/test",
    element: <Textfieldtest />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
