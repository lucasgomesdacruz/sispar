import Login from "./pages/Login/Login.jsx";

import Layout from "./components/Layouts/Layout";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Historico from "./pages/historico/Historico.jsx";
import Analises from "./pages/analises/Analises.jsx"
import Reembolso from "./pages/reembolso/Reembolso.jsx"
import Recuperar from "./pages/recuperarSenha/Recuperar.jsx";
import Criar from "./pages/criarConta/Criar.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Perfil from "./pages/perfil/Perfil.jsx";
import Helpdesk from "./pages/helpDesk/Helpdesk.jsx";
import LoginAdm from "./pages/LoginAdm/LoginAdm.jsx";
import LayoutAdm from "./components/Layouts/LayoutAdm.jsx";
import DashboardAdm from "./pages/dashboardAdm/DashboardAdm.jsx";
import ReembolsoAdm from "./pages/reembolsoAdm/ReembolsoAdm.jsx";
import GerenciarUsuarios from "./pages/gerenciarUsuarios/GerenciarUsuarios.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/loginAdm",
    element: <LoginAdm />
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
      {
        path: "/perfil",
        element: <Perfil />
      },
      {
        path: "/central-de-ajuda",
        element: <Helpdesk />
      }
    ]
  },
  {
    element: <LayoutAdm />,
    children: [
      {
        path: "/dashboardAdm",
        element: <DashboardAdm />,
      },
      {
        path: "/reembolsoAdm",
        element: <ReembolsoAdm />,
      },
      {
        path: "/gerenciarUsuarios",
        element: <GerenciarUsuarios />,
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  },
])

export { router }