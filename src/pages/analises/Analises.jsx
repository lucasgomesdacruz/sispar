import { useState, useEffect } from "react";
import styles from "./Analises.module.scss";
import Header from "../../components/header/Header.jsx";
import Api from "../../Services/Api.jsx";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import { IoDocumentTextSharp } from "react-icons/io5";
import logo from "../../assets/images/TelaLogin/logo.png"

function Analises() {
    const [reembolsos, setReembolsos] = useState([]);
    const [totalReembolsos, setTotalReembolsos] = useState(0);

    // Função para buscar os dados dos reembolsos
    const fetchReembolsos = async () => {
        try {
            const response = await Api.get('/colaborador/reembolsos');
            console.log("Dados recebidos:", response.data);
            setReembolsos(response.data);
            calcularTotal(response.data); 
        } catch (err) {
            console.error("Erro ao buscar reembolsos:", err);
        }
    };

    // Função para calcular o total dos reembolsos
    const calcularTotal = (dados) => {
        const total = dados.reduce((acc, curr) => acc + parseFloat(curr.valor_faturado || 0), 0);
        setTotalReembolsos(total);
    };

    useEffect(() => {
        fetchReembolsos();
    }, []);

    return (
        <>
            <Helmet>
                <title>Análises de Reembolsos | SISPAR</title>
                <meta name="description" content="Consulte as análises dos reembolsos realizados." />
                <meta name="keywords" content="análises, reembolsos, total, financeiro, despesas" />
            </Helmet>

            <main className={styles.analises}>
                <Header icon={<MdOutlineNavigateNext />} text="Análises" />

                {/* Exibição do total de reembolsos */}
                <section className={styles.totalSection}>
                    <div className={styles.totalContainer}>
                        <img src={logo} alt="Logo" className={styles.logo} />
                        <h1>Painel de Análise de Reembolsos</h1>
                        <h2>Total de Reembolsos</h2>
                        <p>R$ {totalReembolsos.toFixed(2)}</p>
                    </div>
                </section>

                <section className={styles.tableContainer}>
                    <table className={styles.customTable}>
                        <thead className={styles.containerThead}>
                            <tr className={styles.containerTr}>
                                <th>Colaborador(a)</th>
                                <th>Empresa</th>
                                <th>Data</th>
                                <th>Motivo</th>
                                <th>Tipo Reemb.</th>
                                <th>Valor Faturado</th>
                            </tr>
                        </thead>
                        <tbody className={styles.containerTbody}>
                            {reembolsos.map((task, index) => (
                                <tr key={index} className={styles.containerTr}>
                                    <td>{task.colaborador}</td>
                                    <td>{task.empresa}</td>
                                    <td>{task.data}</td>
                                    <td className={styles.motiveHover}><IoDocumentTextSharp /></td>
                                    <td>{task.tipo_reembolso}</td>
                                    <td>R$ {task.valor_faturado}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </>
    );
}

export default Analises;
