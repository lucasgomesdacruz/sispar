import styles from "./Dashboard.module.scss"

import { IoIosList } from "react-icons/io";
import { VscHistory } from "react-icons/vsc";
import { BsClipboardData } from "react-icons/bs";



import Modalidades from "../../components/modalidades/Modalidades.jsx";
import Analysis from "../../components/analysis/Analysis.jsx";
// import { FaFileInvoiceDollar } from "react-icons/fa6";

import { FaRegClock } from "react-icons/fa6";
import { TbArrowBackUp } from "react-icons/tb";
// import { FiCheck } from "react-icons/fi";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { BsX } from "react-icons/bs";
import { VscCloudUpload } from "react-icons/vsc";

function Dashboard() {
    return (
        <>
        <div className={styles.dashboard}>

            <main className={styles.mainContainer}>
                <div className={styles.mainHeader}>
                    <h1>Sistema de Reembolsos</h1>
                    <p>Solicite novos pedidos de reembolso, visualize solicitações em análise e todo o histórico.</p>
                </div>
                

                <section className={styles.mode}>
                    <ul className={styles.modeView}>
                        <li>
                            <Modalidades icon={<BsClipboardData />} text="Solicitar Reembolso"/>
                        </li>
                        <li>
                            <Modalidades icon={<IoIosList />} text="Verificar análises"/>
                        </li>
                        <li>
                            <Modalidades icon={<VscHistory />} text="Histórico"/>
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