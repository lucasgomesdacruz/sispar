import styles from "./Rembolsos.module.scss"
import { AiOutlineHome } from "react-icons/ai";
import Modalidades from "../../components/modalidades/Modalidades";

function Rembolsos() {
    return (
        <>
        <div className={styles.dashboard}>
            <header className={styles.header}>    
                <AiOutlineHome />

                <nav>
                    <ul>
                        <li>Reembolsos</li>
                    </ul>
                </nav>
            </header>
            <main className={styles.mainContainer}>
                <h1>Sistema de reembolsos</h1>
                <p>Solicite novos pedidos de reembolso, visualize solicitações em análise e todo o histórico.</p>

                <section className={styles.modalidades}>
                    <ul>
                        <li>
                            <Modalidades icon={<AiOutlineHome />} text="Solicitar Reembolso"/>
                        </li>
                        <li>
                            <Modalidades icon={<AiOutlineHome />} text="Solicitar Reembolso"/>
                        </li>
                        <li>
                            <Modalidades icon={<AiOutlineHome />} text="Solicitar Reembolso"/>
                        </li>
                    </ul>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </section>
            </main>
        </div>
        </>
    )
}

export default Rembolsos;