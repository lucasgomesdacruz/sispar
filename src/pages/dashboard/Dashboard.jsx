import styles from "./Dashboard.module.scss"

import { IoIosList } from "react-icons/io";
import { VscHistory } from "react-icons/vsc";
import { BsClipboardData } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa6";
import { TbArrowBackUp } from "react-icons/tb";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { BsX } from "react-icons/bs";
import { VscCloudUpload } from "react-icons/vsc";

import Modalidades from "./_components/modalidades/Modalidades.jsx";
import Analysis from "./_components/analysis/Analysis.jsx";
import Header from "../../components/header/Header.jsx";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Dashboard() {
    return (
        <>
            <Helmet>
                <title>Solicitação de Reembolso | SISPAR</title>
                <meta name="description" content="Faça sua solicitação de reembolso de forma rápida e segura." />
                <meta name="keywords" content="reembolso, solicitação de reembolso, financeiro, SISPAR" />
                <meta name="author" content="Nome da Empresa ou Seu Nome" />
                <meta name="robots" content="index, follow" />

                <meta property="og:title" content="Solicitação de Reembolso | SISPAR" />
                <meta property="og:description" content="Faça sua solicitação de reembolso de forma rápida e segura." />
                <meta property="og:image" content="URL_da_imagem_de_compartilhamento" />
                <meta property="og:url" content="URL_da_sua_página" />
                <meta property="og:type" content="website" />

                <meta name="twitter:title" content="Solicitação de Reembolso | SISPAR" />
                <meta name="twitter:description" content="Faça sua solicitação de reembolso de forma rápida e segura." />
                <meta name="twitter:image" content="URL_da_imagem_de_compartilhamento" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <div className={styles.dashboard}>
                
                <Header />

                <main className={styles.mainContainer}>
                    <div className={styles.mainHeader}>
                        <h1>Sistema de Reembolsos</h1>
                        <p>Solicite novos pedidos de reembolso, visualize solicitações em análise e todo o histórico.</p>
                    </div>
                    <section className={styles.mode}>
                        <ul className={styles.modeView}>
                            <li>
                                <Link to="/reembolso">
                                    <Modalidades icon={<BsClipboardData />} text="Solicitar Reembolso"/>
                                </Link>
                                
                            </li>
                            <li>
                                <Link to="/analises">
                                    <Modalidades icon={<IoIosList />} text="Verificar análises"/>
                                </Link>
                            </li>
                            <li>
                                <Link to="/historico">  
                                    <Modalidades icon={<VscHistory />} text="Histórico"/>
                                </Link>
                                
                            </li>
                        </ul>
                        <ul className={styles.modeAnalysis}>
                            <li>
                                <Analysis spanClass={styles.requested} icon={<TbArrowBackUp />} number="182" text="Solicitados"/>
                            </li>
                            <li>
                                <Analysis spanClass={styles.analyze} icon={<FaRegClock />} number="74" text="Em análise"/>
                            </li>
                            <li>
                                <Analysis spanClass={styles.check} icon={<MdOutlineFileDownloadDone />} number="195" text="Aprovados"/>
                            </li>
                            <li>
                                <Analysis spanClass={styles.wrong} icon={<BsX />} number="41" text="Reijetados"/>
                            </li>
                        </ul>
                        <p className={styles.sistem}><VscCloudUpload /> Sistema atualizado</p>
                    </section>
                </main>
            </div>  
        </>
    )
}
export default Dashboard;