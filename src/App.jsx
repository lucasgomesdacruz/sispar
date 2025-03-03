import Login from "./pages/login/Login.jsx";

import Layout from "./components/Layouts/Layout";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Historico from "./pages/historico/Historico.jsx";
import Analises from "./pages/analises/Analises.jsx"
import Reembolso from "./pages/reembolso/Reembolso.jsx"
import Recuperar from "./pages/recuperarSenha/Recuperar.jsx";
import Criar from "./pages/criarConta/Criar.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/recuperarSenha",
    element: <Recuperar />
  },
  {
    path: "/criarConta",
    element: <Criar />
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
        path: "/historico",
        element: <Historico />
      },
      {
        path: "/analises",
        element: <Analises />
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  },
])

export { router }