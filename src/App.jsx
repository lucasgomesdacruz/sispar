import Login from "./pages/Login/Login";

import Layout from "./components/Layouts/Layout";
import { createBrowserRouter } from "react-router-dom";
import Rembolsos from "./pages/rembolsos/Rembolsos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/rembolsos",
        element: <Rembolsos />,
      },
    ]
  }
])

export { router }