import styles from "./Reembolso.module.scss"



import { IoDocumentTextSharp } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { RiDeleteBack2Line } from 'react-icons/ri'

import { AiOutlineCaretDown } from 'react-icons/ai'

import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";


import Header from "../../components/header/Header.jsx"
import Input from "../../components/Input/Input.jsx"
import Button from "../../components/button/Button.jsx";
import { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";

function Reembolso() {
    const [modalType, setModalType] = useState(null); 

    const [formData, setFormData] = useState({
        nome: '',
        empresa: '',
        contas: '',
        descricao: '',
        data: '',
        tipoDespesa: '',
        centroCusto: '',
        ordInt: '',
        pep: '',
        div: '',
        km: '',
        moeda: '',
        valor: '',
        taxa: '',
        val: '',
        despesa: ''
    });

    // Estado para armazenar a lista de tarefas
    const [taskList, setTaskList] = useState([]);

    console.log(taskList)

    // Função para lidar com a alteração dos campos de input
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Função para salvar a tarefa e adicionar na lista
    const handleSave = () => {
        setTaskList([...taskList, formData]);
        // Limpar os campos do formulário após salvar
        setFormData({
            nome: '',
            empresa: '',
            contas: '',
            descricao: '',
            data: '',
            tipoDespesa: '',
            centroCusto: '',
            ordInt: '',
            pep: '',
            div: '',
            km: '',
            moeda: '',
            valor: '',
            val: '',
            despesa: '',
        });
    };

    function handleCancelRequest() {
        setModalType("cancelRequest");
    }

    function handleClear() {
        setModalType("clearFields");
    }

    function handleDelete() {
        setModalType("deleteRow");
    }

    function handleMotive() {
        setModalType("motive")
    }

    function handleClose() {
        setModalType(null);
    }

    return (

        <div className={styles.reembolso}>
            
        <Header  icon={<MdOutlineNavigateNext />} text="Solicitação de Reembolso"/>
            <main className={styles.mainContainer}>

                <form className={styles.infoContainer}>
                    
                    <section className={styles.form}>

                        <Input type="text" name="nome" label="Nome Completo" id="nome" value={formData.nome} onChange={handleInputChange}/>
                        <Input type="text" name="empresa" label="Empresa" id="empresa" value={formData.empresa} onChange={handleInputChange}/>
                        <Input type="text" name="contas" label="Nº Prest. Contas" id="contas" value={formData.contas} onChange={handleInputChange}/>
                        <Input type="text" name="descricao" label="Descrição / Motivo do Reembolso" id="descricao" value={formData.descricao} onChange={handleInputChange}/>
                    </section>
                    {/* Pode criar uma div vazia para fazer uma barra vertical com css */}
                    <section className={styles.formDetails}>
                        
                        <div className={styles.containerDate}>
                            <label htmlFor="date">Data</label>
                            <input className={styles.input} name="data" type="date" id="data" placeholder="DD/MM/AAAA" value={formData.data} onChange={handleInputChange}/>
                        </div>

                        <div className={styles.containerSelect}>
                            <label htmlFor="tipoDespesa">Tipo de Despesa</label>
                            <select className={styles.select} name="tipoDespesa" id="tipoDespesa" value={formData.tipoDespesa} onChange={handleInputChange}>
                                <option value="">Selecionar</option>
                                <option value="alimentacao">Alimentação</option>
                                <option value="combustivel">Combustível</option>
                                <option value="conducao">Condução</option>
                                <option value="estacionamento">Estacionamento</option>
                                <option value="viagem-admin">Viagem admin.</option>
                                <option value="viagem-operacional">Viagem operacional</option>
                                <option value="eventos-representacao">Eventos de representação</option>
                            </select>
                            <div className={styles.icon}>
                                <AiOutlineCaretDown />
                            </div>
                        </div>
                        <div className={styles.containerSelect}>
                            <label htmlFor="centroCusto">Centro de Custo</label>
                            <select className={styles.select} name="centroCusto" id="centroCusto" value={formData.centroCusto} onChange={handleInputChange}>
                                <option value="">Selecionar</option>
                                <option value="controles-internos">1100109002 - FIN COTROLES INTERNOS MTZ</option>
                                <option value="presidencia-financas">1100109002 FIM VICE-PRESIDENCIA FINANCAS MTZ</option>
                                <option value="contabilidade-mtz">1100109002 FIN CONTABILIDADE MTZ</option>
                                
                            </select>
                            <div className={styles.icon}>
                                <AiOutlineCaretDown />
                            </div>
                        </div>
                        {/* <Input type="date" label="Controle de Custo" id="contas"/> */}
                        <div className={styles.rows}>
                            <Input type="text" name="ordInt" label="Ord. Int." id="ordInt" value={formData.ordInt} onChange={handleInputChange}/>
                            <Input type="text" name="div" label="Div." id="div" value={formData.div} onChange={handleInputChange}/>
                            <Input type="text" name="pep" label="PEP" id="pep" value={formData.pep} onChange={handleInputChange}/>
                            <div className={styles.containerSelectMoeda}>
                                <label htmlFor="moeda">Moeda</label>
                                <select className={styles.select} name="moeda" id="moeda" value={formData.moeda} onChange={handleInputChange}>
                                    <option value="">$</option>
                                    <option value="real">REAL</option>
                                    <option value="dolar">DOLAR</option>
                                    <option value="euro">EURO</option>
                                </select>
                                <div className={styles.icon}>
                                    <AiOutlineCaretDown />
                                </div>
                            </div>
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
                            <tr className={styles.containerTr}>
                                <td className={styles.clickHover} onClick={handleDelete}><FaTrashAlt /></td>
                                <td>Vitor Carvalho</td>
                                <td>WSS001</td>
                                <td>329456</td>
                                <td>08/01/2025</td>
                                <td className={styles.motiveHover} onClick={handleMotive}><IoDocumentTextSharp /></td>
                                <td>Desp. de viagem a...</td>
                                <td>1100110002 - FIN...</td>
                                <td>0003</td>
                                <td>002</td>
                                <td>001</td>
                                <td>BRL</td>
                                <td>434Km</td>
                                <td>0.65</td>
                                <td>242.10</td>
                                <td>40.05</td>
                            </tr>
                            <tr className={styles.containerTr}>
                                <td className={styles.clickHover} onClick={handleDelete}><FaTrashAlt /></td>
                                <td>Vanessa Porto</td>
                                <td>WSS002</td>
                                <td>987789</td>
                                <td>01/01/2025</td>
                                <td className={styles.motiveHover} onClick={handleMotive}><IoDocumentTextSharp /></td>
                                <td>Desp. de viagem a...</td>
                                <td>1100110102 - FIN C...</td>
                                <td>0002</td>
                                <td>005</td>
                                <td>001</td>
                                <td>ARS</td>
                                <td>289Km</td>
                                <td>0.37</td>
                                <td>106.93</td>
                                <td>0.00</td>
                            </tr>
                            <tr className={styles.containerTr}>
                                <td className={styles.clickHover} onClick={handleDelete}><FaTrashAlt /></td>
                                <td>Washington Klein</td>
                                <td>WSS003</td>
                                <td>546791</td>
                                <td>03/01/2025</td>
                                <td className={styles.motiveHover} onClick={handleMotive}><IoDocumentTextSharp /></td>
                                <td>Eventos de apresen...</td>
                                <td>1100109002 - FIN...</td>
                                <td>0001</td>
                                <td>005</td>
                                <td>001</td>
                                <td>USD</td>
                                <td>197Km</td>
                                <td>0.75</td>
                                <td>109.75</td>
                                <td>29.97</td>
                            </tr>

                            {taskList.map((task, index) => (
                                <tr key={index} className={styles.containerTr}>
                                    <td className={styles.clickHover} onClick={handleDelete}><FaTrashAlt /></td>
                                    <td>{task.nome}</td>
                                    <td>{task.empresa}</td>
                                    <td>{task.contas}</td>
                                    <td>{task.data}</td>
                                    <td className={styles.motiveHover} onClick={handleMotive}><IoDocumentTextSharp /></td>
                                    <td>{task.tipoDespesa}</td>
                                    <td>{task.centroCusto}</td>
                                    <td>{task.ordInt}</td>
                                    <td>{task.pep}</td>
                                    <td>{task.div}</td>
                                    <td>{task.km}</td>
                                    <td>{task.moeda}</td>
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
                       
                            <Button icon={<FaCheck />} text="Enviar para Análise" type="button" className={styles.send}/>
                            <Button onClick={handleCancelRequest} icon={<IoMdClose />} type="button" text="Cancelar Solicitação" className={styles.cancel}/>
                    </div>
                </section>

            </main>
            {modalType === "clearFields" && (
                <section className={styles.modalBackround}>
                    <div className={styles.modalCancel}>
                        <h3>Deseja realmente limpar os campos preenchidos acima?</h3>
                        <div>
                            <button className={styles.edit} type="button">Continuar Editando</button>
                            <button className={styles.clean} type="button" onClick={handleClose}>Sim, limpar</button>
                        </div>
                    </div>
                </section>
            )}

            {modalType === "deleteRow" && (
                <section className={styles.modalBackround}>
                    <div className={styles.modalCancel}>
                        <h3>Deseja realmente excluir os dados dessa linha?</h3>
                        <div>
                            <button className={styles.edit} type="button">Continuar Editando</button>
                            <button className={styles.clean} type="button" onClick={handleClose}>Sim, excluir</button>
                        </div>
                    </div>
                </section>
            )}

            {modalType === "cancelRequest" && (
                <section className={styles.modalBackround}>
                    <div className={styles.modalCancel}>
                        <h3>Tem certeza que deseja cancelar a solicitação?</h3>
                        <div>
                            <button className={styles.edit} type="button">Continuar Editando</button>
                            <button className={styles.clean} type="button" onClick={handleClose}>Sim, cancelar</button>
                        </div>
                    </div>
                </section>
            )}

            {modalType === "motive" && (
                <section className={styles.modalBackround}>
                    <div className={styles.modalCancel}>
                        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum dolor, sit amet consectetur adipisicing.</h3>
                        <div>
                            <button className={styles.edit} type="button">Continuar Editando</button>
                            <button className={styles.clean} type="button" onClick={handleClose}>Fechar</button>
                        </div>
                    </div>
                </section>
            )}
        </div>
        
    )
}

export default Reembolso