import styles from "./Reembolso.module.scss"

import { IoDocumentTextSharp } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { RiDeleteBack2Line } from 'react-icons/ri'
import { GrAdd } from 'react-icons/gr'
import { AiOutlineCaretDown } from 'react-icons/ai'

import { CgCalendarDates } from 'react-icons/cg'
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";



import Input from "../../components/Input/Input.jsx"
import Button from "../../components/button/Button.jsx";

function Reembolso() {
    return (

        <div className={styles.reembolso}>

            <main className={styles.mainContainer}>

                <form className={styles.infoContainer}>
                    
                    <section className={styles.form}>
                        <Input type="text" label="Nome Completo" id="nome"/>
                        <Input type="text" label="Empresa" id="empresa"/>
                        <Input type="text" label="Nº Prest. Contas" id="contas"/>
                        <Input type="text" label="Descrição / Motivo do Reembolso" id="descricao"/>
                    </section>
                    {/* Pode criar uma div vazia para fazer uma barra vertical com css */}
                    <section className={styles.formDetails}>
                        
                        {/* <Input className={styles.backround} type="date" label="Data" placeholder="DD/MM/AAAA" id="data"/> */}
                        <div className={styles.containerDate}>
                            <label htmlFor="date">Data</label>
                            <input className={styles.input} type="date" id="data" placeholder="DD/MM/AAAA"/>

                            
                        </div>

                            
                            
                        
                        
                        <div className={styles.containerSelect}>
                            <label htmlFor="tipoDespesa">Tipo de Despesa</label>
                            <select className={styles.select} name="tipoDespesa" id="tipoDespesa">
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
                            <select className={styles.select} name="centroCusto" id="centroCusto">
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
                            <Input type="text" label="Ord. Int." id="descricao"/>
                            <Input type="text" label="PEP" id="pep"/>
                            <Input type="text" label="Div." id="div"/>
                            <Input type="text" label="Dist. / Km" id="km"/>
                            <Input type="text" label="Moeda" id="moedas"/>
                            <Input type="text" label="Valor / Km" id="valor"/>
                            <Input type="text" label="Val. Taxa" id="taxa"/>
                            <Input type="text" label="Val. Faturado" id="val"/>

                            
                            <Button icon={<FaCheck />}text="Salvar" type="button" className={styles.save}/>

                            <Button icon={<RiDeleteBack2Line />} type="button" className={styles.delete}/>
                            

                            
                            
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
                                <td><FaTrashAlt /></td>
                                <td>Vitor Carvalho</td>
                                <td>WSS001</td>
                                <td>329456</td>
                                <td>08/01/2025</td>
                                <td><IoDocumentTextSharp /></td>
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
                                <td><FaTrashAlt /></td>
                                <td>Vanessa Porto</td>
                                <td>WSS002</td>
                                <td>987789</td>
                                <td>01/01/2025</td>
                                <td><IoDocumentTextSharp /></td>
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
                                <td><FaTrashAlt /></td>
                                <td>Washington Klein</td>
                                <td>WSS003</td>
                                <td>546791</td>
                                <td>03/01/2025</td>
                                <td><IoDocumentTextSharp /></td>
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
                        </tbody>
                    </table>
                </div>
                <section className={styles.containerFull}>
                    <div className={styles.containerGroups}>
                        
                            <Input type="text" label="Total Faturado" id="faturado" placeholder="0.00"/>
                            <Input type="text" label="Total Despesa" id="despesa" placeholder="0.00"/>
                       
                        
                            <Button icon={<FaCheck />}text="Enviar para Análise" type="button" className={styles.send}/>
                            <Button icon={<IoMdClose />} type="button" text="Cancelar Solicitação" className={styles.cancel}/>
                        
                    </div>
                    
                </section>

            </main>
            
        </div>
        
    )
}

export default Reembolso