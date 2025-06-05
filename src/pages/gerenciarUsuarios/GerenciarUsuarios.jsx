import { toast, ToastContainer } from "react-toastify"
import Construction from "../../components/construction/Construction"
import styles from "./GerenciarUsuarios.module.scss"
import Header from "../../components/header/Header";
import { useEffect } from "react";
import { FaUsers } from "react-icons/fa";

const usuarios = [
    {
        nome: 'João Silva',
        email: 'joao@empresa.com',
        funcao: 'Funcionário',
        departamento: 'TI',
        status: 'Ativo',
    },
    {
        nome: 'Maria Santos',
        email: 'maria@empresa.com',
        funcao: 'Gerente',
        departamento: 'RH',
        status: 'Ativo',
    },
    {
        nome: 'Pedro Costa',
        email: 'pedro@empresa.com',
        funcao: 'Funcionário',
        departamento: 'Vendas',
        status: 'Inativo',
    },
];

const GerenciarUsuarios = () => {
    function initial() {
        toast.info("Essa page está em desenvolvimento :)");
    }

    useEffect(() => {
        initial()
    }, [])
    
    return (
        <section className={styles.bgGerenciarUsuarios}>
            <Header  text="Gerenciar Usuários"/>
            <article className={styles.containerheader}>
                <div>
                    <h1>Gerenciar Usuários</h1>
                    <p>Administre usuários do sistema</p>
                    </div>
                    <button className={styles.newUserBtn}>
                    <span>👤</span> Novo Usuário
                </button>
            </article>

            <article className={styles.card}>
                <div className={styles.cardHeader}>
                    <div>
                        <div className={styles.contentTitle}>
                            <FaUsers /><h2>Lista de Usuários</h2>
                        </div>
                        <p>Visualize e gerencie todos os usuários</p>
                    </div>
                    <div className={styles.actions}>
                        <input type="text" placeholder="Buscar usuários..." />
                        <button className={styles.filterBtn}>⚙️ Filtros</button>
                    </div>
                </div>

                <table className={styles.table}>
                    <thead>
                        <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Função</th>
                        <th>Departamento</th>
                        <th>Status</th>
                        <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((user, idx) => (
                        <tr key={idx}>
                            <td><strong>{user.nome}</strong></td>
                            <td>{user.email}</td>
                            <td>{user.funcao}</td>
                            <td>{user.departamento}</td>
                            <td>
                            <span className={`${styles.status} ${user.status === 'Ativo' ? styles.ativo : styles.inativo}`}>
                                {user.status}
                            </span>
                            </td>
                            <td>
                            <button className={styles.editBtn} onClick={initial}>Editar</button>
                            <button className={styles.removeBtn} onClick={initial}>Remover</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </article>
            <ToastContainer position="top-right" autoClose={3000} />
        </section>
    )
}

export default GerenciarUsuarios
