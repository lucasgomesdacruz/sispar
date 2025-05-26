import { MdOutlineNavigateNext } from "react-icons/md"
import Header from "../../components/header/Header"
import styles from "./DashboardAdm.module.scss"
import { FaUsers } from "react-icons/fa6"
import { TbReportAnalytics } from "react-icons/tb"
import { GoAlert } from "react-icons/go"
import { toast, ToastContainer } from "react-toastify"
import { useEffect } from "react"

const DashboardAdm = () => {
  function initial() {
    toast.info("Essa page está em desenvolvimento :)");
  }

  useEffect(() => {
    initial()
  }, [])

  
  return (
    <div className={styles.dashboard}>
        <Header icon={<MdOutlineNavigateNext />} text="Dashboard" />
        <main className={styles.mainContainer}>
            <div className={styles.contentTitle}>
                  <h1>Painel Administrativo</h1>
                  <p>Visão geral do sistema e controles administrativos</p>
            </div>
            <section className={styles.statics}>
              
              <ul>
                <li>
                  <div>
                    <h2>Total de Usuarios</h2>
                    <FaUsers />
                  </div>
                  <p>1,234</p>
                </li>
                <li>
                  <div>
                    <h2>Reembolsos Pendentes</h2>
                    <TbReportAnalytics />
              
                  </div>
                  <p>89</p>
                </li>
                <li>
                  <div>
                    <h2>Alertas do Sistema</h2>
                    <GoAlert />
              
                  </div>
                  <p>3</p>
                </li>
              </ul>
            </section>

            <section className={styles.actions}>
              <div>
                <h2>Ações Rápidas</h2>
                <p>Acesso rápido às funções administrativas mais utilizadas</p>
              </div>
              <ul>
                <li>
                  <div>
                    <h3>Gerenciar Usuários</h3>
                    <p>Adicionar, editar ou remover usuários</p>
                  </div>
                  <p>acessar</p>
                </li>

                <li>
                  <div>
                    <h3>Revisar Reembolsos</h3>
                    <p>Aprovar ou rejeitar solicitações</p>
                  </div>
                  <p>acessar</p>
                </li>

                <li>
                  <div>
                    <h3>Configurar Sistema</h3>
                    <p>Ajustar configurações globais</p>
                  </div>
                  <p>acessar</p>
                </li>

                <li>
                  <div>
                    <h3>Backup de Dados</h3>
                    <p>ealizar backup do sistema</p>
                  </div>
                  <p>acessar</p>
                </li>
                
              </ul>
            </section>
            <section className={styles.activities}>
              <div>
                <h3>Atividade Recente</h3>
                <p>Últimas ações realizadas no sistema</p>
              </div>
              <ul>
                <li>
                  <h4>Novo usuário registrado</h4>
                  <p>Novo usuário registrado</p>
                </li>
                <li>
                  <h4>Novo usuário registrado</h4>
                  <p>Novo usuário registrado</p>
                </li>
                <li>
                  <h4>Novo usuário registrado</h4>
                  <p>Novo usuário registrado</p>
                </li>
                <li>
                  <h4>Novo usuário registrado</h4>
                  <p>Novo usuário registrado</p>
                </li>
              </ul>
            </section>
        </main>
        <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default DashboardAdm