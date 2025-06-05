import { toast, ToastContainer } from "react-toastify";
import Construction from "../../components/construction/Construction"
import styles from "./ReembolsoAdm.module.scss"
import Header from "../../components/header/Header";
import { useEffect } from "react";

const ReembolsoAdm = () => {
    function initial() {
        toast.info("Essa page está em desenvolvimento :)");
      }
    
      useEffect(() => {
        initial()
      }, [])


       const solicitacoes = [
    {
      usuario: 'João Silva',
      valor: 'R$ 450,00',
      descricao: 'Transporte',
      data: '15/01/2024',
      status: 'Pendente',
    },
    {
      usuario: 'Maria Santos',
      valor: 'R$ 1.250,00',
      descricao: 'Hospedagem',
      data: '14/01/2024',
      status: 'Aprovado',
    },
    {
      usuario: 'Pedro Costa',
      valor: 'R$ 89,50',
      descricao: 'Alimentação',
      data: '13/01/2024',
      status: 'Rejeitado',
    },
  ];

  const getStatusClass = (status) => {
    if (status === 'Pendente') return styles.statusPendente;
    if (status === 'Aprovado') return styles.statusAprovado;
    if (status === 'Rejeitado') return styles.statusRejeitado;
    return '';
  };

    return (
        <main className={styles.bgReembolsoAdm}>
            <Header text="Gerenciar Reembolsos"/>
            <div className={styles.dashboard}>
              <header className={styles.header}>
                <h1>Gerenciar Reembolsos</h1>
                <p>Aprovar e gerenciar solicitações de reembolso</p>
              </header>

              <section className={styles.summary}>
                <div className={`${styles.card} ${styles.pending}`}>
                  <div>
                    <p>Aguardando aprovação</p>
                    <strong>23</strong>
                  </div>
                  <span className={styles.icon}>⏰</span>
                </div>
                <div className={`${styles.card} ${styles.approved}`}>
                  <div>
                    <p>Este mês</p>
                    <strong>156</strong>
                  </div>
                  <span className={styles.icon}>✅</span>
                </div>
                <div className={`${styles.card} ${styles.rejected}`}>
                  <div>
                    <p>Este mês</p>
                    <strong>12</strong>
                  </div>
                  <span className={styles.icon}>❌</span>
                </div>
              </section>

              <section className={styles.tableSection}>
                <div className={styles.tableHeader}>
                  <h2>Solicitações de Reembolso</h2>
                  <p>Revise e processe as solicitações pendentes</p>
                </div>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Usuário</th>
                      <th>Valor</th>
                      <th>Descrição</th>
                      <th>Data</th>
                      <th>Status</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {solicitacoes.map((item, index) => (
                      <tr key={index}>
                        <td>{item.usuario}</td>
                        <td>{item.valor}</td>
                        <td>{item.descricao}</td>
                        <td>{item.data}</td>
                        <td><span className={getStatusClass(item.status)}>{item.status}</span></td>
                        <td>
                          <button className={`${styles.btn} ${styles.btnApprove}`}>Aprovar</button>
                          <button className={`${styles.btn} ${styles.btnReject}`}>Rejeitar</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </main>
        
    )
    
}

export default ReembolsoAdm