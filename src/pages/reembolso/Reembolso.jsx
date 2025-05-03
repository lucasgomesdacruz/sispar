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

import Api from "../../Services/Api.jsx";

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

function Reembolso() {

    const [formData, setFormData] = useState({
        nome: '',
        empresa: '',
        contas: '',
        data: '',
        tipoDespesa: '',
        centroCusto: '',
        ordInt: '',
        pep: '',
        div: '',
        moeda: '',
        km: '',
        valor: '',
        taxa: '',
        val: '',
        despesa: ''
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
        if (!formData.nome || !formData.empresa || !formData.contas) {
            toast.error("Preencha os campos obrigatórios!");
            return;
        }
        setTaskList([...taskList, formData]);

        setFormData({
            nome: '',
            empresa: '',
            contas: '',
            data: '',
            tipoDespesa: '',
            centroCusto: '',
            ordInt: '',
            pep: '',
            div: '',
            moeda: '',
            km: '',
            valor: '',
            taxa: '',
            val: '',
            despesa: ''
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
        const allFieldsEmpty = Object.values(formData).every(value => value === '');
    
        if (allFieldsEmpty) {
            toast.error("Os campos já estão limpos.");
            return;
        }
    
        setFormData({
            nome: '',
            empresa: '',
            contas: '',
            data: '',
            tipoDespesa: '',
            centroCusto: '',
            ordInt: '',
            pep: '',
            div: '',
            descricao: '',
            moeda: '',
            km: '',
            valor: '',
            taxa: '',
            val: '',
            despesa: ''
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
            return <CancelRequestModal onClose={() => setModalType(null)} />;
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

    // function handleDelete() {
    //     setModalType("deleteRow");
    // }

    function handleMotive() {
        setModalType("motive")
    }

    // cria uma função para enviar os dados para o banco de daods
    const [ foiEnviado, setFoiEnviado ] = useState(false) //criando um estado

    const enviarParaAnalise = async () => {
        try {
            const response = await Api.post("/refunds/new", taskList);
            console.log("Resposta da Api", response);
            toast.success("Reembolso solicitado com sucesso!");
            setFoiEnviado(true);
            setTaskList([]);
        } catch (error) {
            console.error("Erro ao enviar reembolso:", error);
            toast.error("Erro ao solicitar reembolso. Tente novamente.");
        }
    };

    useEffect(() => {
        if(foiEnviado === true) {
            //Se "foi Enviado for true, segnifica que o reembolso foi enviado com sucesso"
            setFoiEnviado(false);
            setTaskList([]);
        }
    }, [foiEnviado])

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

                        <Input type="text" name="nome" label="Nome Completo" id="nome" value={formData.nome} onChange={handleInputChange}/>
                        <Input type="text" name="empresa" label="Empresa" id="empresa" value={formData.empresa} onChange={handleInputChange}/>
                        <Input type="text" name="contas" label="Nº Prest. Contas" id="contas" value={formData.contas} onChange={handleInputChange}/>
                        <Input type="text" name="descricao" label="Descrição / Motivo do Reembolso" id="descricao" value={formData.descricao} onChange={handleInputChange}/>
                    </section>

                    <section className={styles.formDetails}>
                        
                        <div className={styles.containerDate}>
                            <label htmlFor="date">Data</label>
                            <input className={styles.input} name="data" type="date" id="data" placeholder="DD/MM/AAAA" value={formData.data} onChange={handleInputChange}/>
                        </div>

                        <OptionsExpense onChange={handleInputChange} value={formData.tipoDespesa}/>
                        <OptionsConst value={formData.centroCusto} onChange={handleInputChange}/>
                       
                        <div className={styles.rows}>
                            <Input type="text" name="ordInt" label="Ord. Int." id="ordInt" value={formData.ordInt} onChange={handleInputChange}/>
                            <Input type="text" name="pep" label="PEP" id="pep" value={formData.pep} onChange={handleInputChange}/>

                            <Input type="text" name="div" label="Div." id="div" value={formData.div} onChange={handleInputChange}/>
                            
                            <OptionsDate  value={formData.moeda} onChange={handleInputChange}/>

                            <Input type="text" name="km" label="Dist. / Km" id="km" value={formData.km} onChange={handleInputChange}/>

                            <Input type="text" name="valor" label="Valor / Km" id="valor" value={formData.valor} onChange={handleInputChange}/>
                            <Input type="text" name="val" label="Val. Faturado" id="val" value={formData.val} onChange={handleInputChange}/>
                            <Input type="text" name="despesa" label="Despesa" id="despesa" value={formData.despesa} onChange={handleInputChange}/>
                            
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

                                    <td>{task.nome}</td>
                                    <td>{task.empresa}</td>
                                    <td>{task.contas}</td>
                                    <td>{task.data}</td>
                                    <td className={styles.motiveHover} onClick={handleMotive}><IoDocumentTextSharp /></td>
                                    <td>{task.tipoDespesa}</td>
                                    <td>{task.centroCusto}</td>
                                    <td>{task.ordInt}</td>
                                    <td>{task.div}</td>
                                    <td>{task.pep}</td>
                                    <td>{task.moeda}</td>
                                    <td>{task.km}</td>
                                    <td>{task.valor}</td>
                                    <td>{task.val}</td>
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