import styles from "./Reembolso.module.scss"

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { IoDocumentTextSharp } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { RiDeleteBack2Line } from 'react-icons/ri'
import { MdOutlineNavigateNext } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

import Header from "../../components/header/Header.jsx"
import Input from "../../components/Input/Input.jsx"
import Button from "../../components/button/Button.jsx";

import OptionsDate from "./_components/OptionsDate/OptionsDate.jsx";
import OptionsExpense from "./_components/OptionsExpense/OptionsExpense.jsx";
import OptionsConst from "./_components/OptionsConst/OptionsConst.jsx";

import ClearFieldsModal from "../reembolso/_components/modals/clearFieldsModal/ClearFieldsModal.jsx";
import DeleteRowModal from "../reembolso/_components/modals/deleteRowModal/DeleteRowModal.jsx";
import CancelRequestModal from "../reembolso/_components/modals/cancelRequestModal/CancelRequestModal.jsx";
import MotiveModal from "../reembolso/_components/modals/motiveModal/MotiveModal.jsx";


import { useState } from "react";
import { Helmet } from "react-helmet-async";

import Api from "../../Services/Api.jsx"

function Reembolso() {

    const [formData, setFormData] = useState({
        colaborador: "",
        empresa: "",
        num_prestacao: "",
        descricao: "",
        data: "",
        tipo_reembolso: "",
        centro_custo: "",
        ordem_interna: "",
        divisao: "",
        pep: "",
        moeda: "",
        distancia_km: "",
        valor_km: "",
        valor_faturado: "",
        despesa: "",
        status: 'Em analise',
    });

    const [taskList, setTaskList] = useState([]);

    console.log(taskList)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = () => {
        if (!formData.colaborador || !formData.empresa || !formData.num_prestacao || !formData.data) {
            toast.error("Preencha os campos obrigatórios!");
            return;
        }

        // Lista de campos numéricos que não podem ser menores que 1
        const numericFields = [
            "ordem_interna",
            "pep",
            "divisao",
            "distancia_km",
            "valor_km",
            "valor_faturado",
            "despesa"
        ];

        for (const field of numericFields) {
            const value = Number(formData[field]);

            if (value < 1) {
                toast.error(`O campo "${field}" deve ser maior ou igual a 1.`);
                return;
            }
        }
        setTaskList([...taskList, formData]);

        setFormData({
            colaborador: "",
            empresa: "",
            num_prestacao: "",
            descricao: "",
            data: "",
            tipo_reembolso: "",
            centro_custo: "",
            ordem_interna: "",
            divisao: "",
            pep: "",
            moeda: "",
            distancia_km: "",
            valor_km: "",
            valor_faturado: "",
            despesa: "",
            status: 'Em analise',
        });
    };

    const [modalType, setModalType] = useState(null);
    const [indexToRemove, setIndexToRemove] = useState(null);

    const handleDelete = (index) => {
        setIndexToRemove(index);
        setModalType("deleteRow");
    };

    const handleRemoveTask = (indexToRemove) => {
        const newTaskList = taskList.filter((_, index) => index !== indexToRemove);
        setTaskList(newTaskList);
        toast.info("Item removido da lista.");
    };

    const clearInputs = () => {
        // Faz uma cópia sem o campo "status"
        const { status, ...rest } = formData;

        const allFieldsEmpty = Object.values(rest).every(value => value === '');

        if (allFieldsEmpty) {
            toast.error("Os campos já estão limpos.");
            return;
        }
    
        setFormData({
            colaborador: "",
            empresa: "",
            num_prestacao: "",
            descricao: "",
            data: "",
            tipo_reembolso: "",
            centro_custo: "",
            ordem_interna: "",
            divisao: "",
            pep: "",
            moeda: "",
            distancia_km: "",
            valor_km: "",
            valor_faturado: "",
            despesa: "",
            status: 'Em analise',
        });
    
        toast.info("Campos limpos.");
    };

    const renderModal = () => {
        switch (modalType) {
            case "clearFields":
            return <ClearFieldsModal onClose={() => setModalType(null)} onConfirm={() => { clearInputs(), setModalType(null) }}/>;
            case "deleteRow":
            return <DeleteRowModal onClose={() => setModalType(null)}  onConfirm={() => { handleRemoveTask(indexToRemove),  setModalType(null) }}/>;
            case "cancelRequest":
            return <CancelRequestModal onClose={() => setModalType(null)}  onConfirm={handleCancelRequestConfirm} />;
            case "motive":
            return <MotiveModal onClose={() => setModalType(null)} />;
            default:
            return null;
        }
    };

    function handleCancelRequest() {
        setModalType("cancelRequest");
    }

    function handleClear() {
        setModalType("clearFields");
    }

    function handleMotive() {
        setModalType("motive")
    }

    const handleCancelRequestConfirm = () => {
         if (taskList.length === 0) {
            toast.error("A lista já está limpa.");
            setModalType(null);
            return;
        }
        setTaskList([]); // limpa a lista
        setModalType(null); // fecha o modal
        toast.info("Solicitação cancelada e lista limpa.");
    };


    const [foiEnviado, setFoiEnviado] = useState(false);

    const enviarParaAnalise = async () => {
        try {
          if (taskList.length === 0) {
            toast.warning("Nenhuma tarefa para enviar.");
            return;
          }
      
          for (const item of taskList) {
            const payload = {
              ...item,
              id_colaborador: 7 // Substitua pelo ID real, se necessário
            };
      
            await Api.post("colaborador/reembolsos", payload, {
              headers: {
                "Content-Type": "application/json"
              }
            });

            console.log(foiEnviado)
          }
      
          toast.success("Todos os reembolsos foram enviados com sucesso!");
          setFoiEnviado(true);
          setTaskList([]);
      
        } catch (error) {
          console.error("Erro ao enviar reembolsos:", error.response?.data || error.message);
          toast.error("Erro ao solicitar reembolsos. Verifique os dados.");
        }
      };
      
    return (
        <div className={styles.reembolso}>
            <Helmet>
                <title>Solicitação de Reembolso | SISPAR</title>
                <meta name="description" content="Preencha e gerencie suas solicitações de reembolso de forma eficiente." />
                <meta name="keywords" content="reembolso, solicitação, financeiro, despesas, empresa" />

                <meta name="author" content="Nome da Empresa ou Seu Nome" />
                <meta name="robots" content="index, follow" />

                <meta property="og:title" content="Solicitação de Reembolso | SISPAR" />
                <meta property="og:description" content="Preencha e gerencie suas solicitações de reembolso de forma eficiente." />
                <meta property="og:image" content="URL_da_imagem_de_compartilhamento" />
                <meta property="og:url" content="URL_da_sua_página" />
                <meta property="og:type" content="website" />

            
                <meta name="twitter:title" content="Solicitação de Reembolso | SISPAR" />
                <meta name="twitter:description" content="Preencha e gerencie suas solicitações de reembolso de forma eficiente." />
                <meta name="twitter:image" content="URL_da_imagem_de_compartilhamento" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <Header  icon={<MdOutlineNavigateNext />} text="Solicitação de Reembolso"/>
            <main className={styles.mainContainer}>

                <form className={styles.infoContainer}>
                    
                    <section className={styles.form}>

                        <Input type="text" name="colaborador" label="Nome Completo" id="nome" value={formData.colaborador} onChange={handleInputChange} title="Digite o nome completo do colaborador sem abreviações."/>
                        <Input type="text" name="empresa" label="Empresa" id="empresa" value={formData.empresa} onChange={handleInputChange} title="Informe o nome da empresa à qual o colaborador pertence."/>
                        <Input type="text" name="num_prestacao" label="Nº Prest. Contas" id="contas" value={formData.num_prestacao} onChange={handleInputChange} title="Digite o número da prestação de contas vinculada a este reembolso."/>
                        <Input type="text" name="descricao" label="Descrição / Motivo do Reembolso" id="descricao" value={formData.descricao} onChange={handleInputChange} title="Descreva brevemente o motivo da solicitação de reembolso."/>
                    </section>

                    <section className={styles.formDetails}>
                        
                        <div className={styles.containerDate}>
                            <label htmlFor="date">Data</label>
                            <input className={styles.input} name="data" type="date" id="data" placeholder="DD/MM/AAAA" value={formData.data} onChange={handleInputChange}/>
                        </div>

                        <OptionsExpense value={formData.tipo_reembolso} onChange={handleInputChange}/>
                        <OptionsConst value={formData.centro_custo} onChange={handleInputChange}/>
                       
                        <div className={styles.rows}>
                            <Input type="number" name="ordem_interna" label="Ord. Int." id="ordInt" min={0} value={formData.ordem_interna} onChange={handleInputChange} title="Número da ordem interna relacionada à despesa."/>
                            <Input type="number" name="pep" label="PEP" id="pep"  min={0} value={formData.pep} onChange={handleInputChange} title="Código PEP (Project Execution Plan), se aplicável."/>

                            <Input type="number" name="divisao" label="Div." id="div" min={0} value={formData.divisao} onChange={handleInputChange} title="Informe a divisão ou setor responsável pela despesa."/>
                            
                            <OptionsDate  value={formData.moeda} onChange={handleInputChange}/>

                            <Input type="number" name="distancia_km" label="Dist. / Km" id="km" min={0} value={formData.distancia_km} onChange={handleInputChange} title="Distância percorrida em quilômetros (km)."/>

                            <Input type="number" name="valor_km" label="Valor / Km" id="valor" min={0} value={formData.valor_km} onChange={handleInputChange} title="Valor pago por quilômetro percorrido."/>
                            <Input type="number" name="valor_faturado" label="Val. Faturado" id="val" min={0} value={formData.valor_faturado} onChange={handleInputChange} title="Valor total faturado referente à despesa."/>
                            <Input type="number" name="despesa" label="Despesa" id="despesa" min={0} value={formData.despesa} onChange={handleInputChange} title="Valor total da despesa a ser reembolsada."/>
                            
                            <Button icon={<FaCheck />} text="Salvar" type="button" className={styles.save} onClick={handleSave}/>
                            <Button onClick={handleClear} icon={<RiDeleteBack2Line />} type="button" className={styles.delete}/>
                        </div>
                    </section>
                </form>
                <div className={styles.tableContainer}>
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
                            {taskList.map((task, index) => (
                                <tr key={index} className={styles.containerTr}>
                                    <td className={styles.clickHover} onClick={() => handleDelete(index)}>
                                        <FaTrashAlt />
                                    </td>

                                    <td>{task.colaborador}</td>
                                    <td>{task.empresa}</td>
                                    <td>{task.num_prestacao}</td>
                                    <td>{task.data}</td>
                                    <td className={styles.motiveHover} onClick={handleMotive}><IoDocumentTextSharp /></td>
                                    <td>{task.tipo_reembolso}</td>
                                    <td>{task.centro_custo}</td>
                                    <td>{task.ordem_interna}</td>
                                    <td>{task.divisao}</td>
                                    <td>{task.pep}</td>
                                    <td>{task.moeda}</td>
                                    <td>{task.distancia_km}</td>
                                    <td>{task.valor_km}</td>
                                    <td>{task.valor_faturado}</td>
                                    <td>{task.despesa}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <section className={styles.containerFull}>
                    <div className={styles.containerGroups}>
                            <Input type="text" label="Total Faturado" id="faturado" placeholder="0.00"/>
                            <Input type="text" label="Total Despesa" id="despesa" placeholder="0.00"/>
                       
                            <Button icon={<FaCheck />} text="Enviar para Análise" type="button" className={styles.send} onClick={enviarParaAnalise}/>
                            <Button onClick={handleCancelRequest} icon={<IoMdClose />} type="button" text="Cancelar Solicitação" className={styles.cancel}/>
                    </div>
                </section>
            </main>
            <div>
                <div tabIndex="-1" role="button" onClick={() => setModalType("clearFields")}></div>
                <div tabIndex="-1" role="button" onClick={() => setModalType("deleteRow")}></div>
                <div tabIndex="-1" role="button" onClick={() => setModalType("cancelRequest")}></div>
                <div tabIndex="-1" role="button" onClick={() => setModalType("motive")}></div>
                {renderModal()}
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    )
}
export default Reembolso