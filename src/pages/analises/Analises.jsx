import styles from "./Analises.module.scss"

import { MdOutlineNavigateNext } from "react-icons/md"
import Header from "../../components/header/Header.jsx"
import Construction from "../../components/construction/Construction.jsx"

function Analises() {
    return (
        <main className={styles.analises}>
            <Header  icon={<MdOutlineNavigateNext />} text="Análises"/>

            <Construction />
            
        </main>
    )
}

export default Analises