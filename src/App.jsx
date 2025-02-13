import Login from "./pages/Login/Login";

import Layout from "./components/Layouts/Layout";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Solicitacao from "./pages/solicitacao/Solicitacao.jsx";
import Historico from "./pages/historico/Historico.jsx";
import Analises from "./pages/analises/Analises.jsx"
import Reembolso from "./pages/reembolso/Reembolso.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/reembolso",
        element: <Reembolso />
      },
      {
        path: "/solitacao",
        element: <Solicitacao />
      },
      {
        path: "/historico",
        element: <Historico />
      },
      {
        path: "/analises",
        element: <Analises />
      },
    ]
  }
])

export { router }