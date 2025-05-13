import styles from "./Historico.module.scss";
import logo from "../../assets/images/TelaLogin/logo.png"

import Header from "../../components/header/Header.jsx";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Api from "../../Services/Api.jsx";
import { useEffect, useState } from "react";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import MotiveModal from "./_components/motiveModal/MotiveModal.jsx";
import { toast, ToastContainer } from "react-toastify";



function Historico() {
    const [reembolsos, setReembolsos] = useState([]);
   
    const fetchReembolsos = async () => {
        try {
            const response = await Api.get('/colaborador/reembolsos');
            console.log("Dados recebidos:", response.data);
            setReembolsos(response.data);
        } catch (err) {
            console.error("Erro ao buscar reembolsos:", err);
           
        }
    };

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const handleDeleteClick = (id) => {
        setSelectedId(id);
        setModalOpen(true);
    };

    const handleConfirmDelete = async () => {
        try {
            await Api.delete('/colaborador/reembolsos', {
                data: { id: selectedId }
            });
            toast.success("Reembolso excluido com sucesso!");
            fetchReembolsos(); // Atualiza a lista
        } catch (err) {
            console.error("Erro ao deletar reembolso:", err);
        } finally {
            setModalOpen(false);
            setSelectedId(null);
        }
    };

    useEffect(() => {
        fetchReembolsos();
    }, []);


    return (
        <>
            <Helmet>
                <title>Histórico de Reembolsos | SISPAR</title>
                <meta
                name="description"
                content="Consulte o histórico de suas solicitações de reembolso de forma fácil e eficiente."
                />
                <meta
                name="keywords"
                content="histórico, reembolsos, solicitações, financeiro, despesas, histórico de reembolsos"
                />
                <meta name="author" content="Nome da Empresa ou Seu Nome" />
                <meta name="robots" content="index, follow" />

                <meta property="og:title" content="Histórico de Reembolsos | SISPAR" />
                <meta
                property="og:description"
                content="Consulte o histórico de suas solicitações de reembolso de forma fácil e eficiente."
                />
                <meta property="og:image" content="URL_da_imagem_de_compartilhamento" />
                <meta property="og:url" content="URL_da_sua_página" />
                <meta property="og:type" content="website" />

                <meta name="twitter:title" content="Histórico de Reembolsos | SISPAR" />
                <meta
                name="twitter:description"
                content="Consulte o histórico de suas solicitações de reembolso de forma fácil e eficiente."
                />
                <meta name="twitter:image" content="URL_da_imagem_de_compartilhamento" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <main className={styles.historico}>
                <Header icon={<MdOutlineNavigateNext />} text="Histórico" />
                
                <section className={styles.containerTitle}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                    <h1 className={styles.title}>Consulte seu Histórico de reembolsos</h1>
                    <p className={styles.subtitle}>Sistema de Emissão de Boletos e Parcelamento</p>
                </section>
                
                <section className={styles.tableContainer}>
                    <table className={styles.customTable}>
                        <thead className={styles.containerThead}>
                            <tr className={styles.containerTr}>
                                <th><IoIosInformationCircleOutline /></th>
                                <th>Colaborador(a)</th>
                                <th>Empresa</th>
                                <th>N° Prest.</th>
                                <th>Data</th>
                                <th>Motivo</th>
                                <th>Tipo Reemb.</th>
                                <th>Ctr. Custo</th>
                                <th>Ord. Int.</th>
                                <th>Div.</th>
                                <th>PEP</th>
                                <th>Moeda</th>
                                <th>Dist. Km</th>
                                <th>Val. Km</th>
                                <th>Val. Faturado</th>
                                <th>Despesa</th>
                            </tr>
                        </thead>
                        <tbody className={styles.containerTbody}>
                            {reembolsos.map((task, index) => (
                                <tr key={index} className={styles.containerTr}>
                                    <td className={styles.clickHover} onClick={() => handleDeleteClick(task.id)}>
                                    <FaTrashAlt />
                                </td>

                                    <td>{task.colaborador}</td>
                                    <td>{task.empresa}</td>
                                    <td>{task.num_prestacao}</td>
                                    <td>{task.data}</td>
                                    <td className={styles.motiveHover}><IoDocumentTextSharp /></td>
                                    <td>{task.tipo_reembolso}</td>
                                    <td>{task.centro_custo}</td>
                                    <td>{task.ordem_interna}</td>
                                    <td>{task.divisao}</td>
                                    <td>{task.pep}</td>
                                    <td>{task.moeda}</td>
                                    <td>{task.distancia_km}</td>
                                    <td>{task.valor_km}</td>
                                    <td>R$ {task.valor_faturado}</td>
                                    <td>R$ {task.despesa}</td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>
                </section>
                {modalOpen && (
                    <MotiveModal
                        onClose={() => setModalOpen(false)}
                        onConfirm={handleConfirmDelete}
                    />
                )}
                <ToastContainer position="top-right" autoClose={3000} />
            </main>
        </>
        
    );
}
export default Historico;
