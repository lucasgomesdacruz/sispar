import styles from "./Historico.module.scss";
import Header from "../../components/header/Header.jsx";
import { MdOutlineNavigateNext } from "react-icons/md";
import Construction from "../../components/construction/Construction.jsx";

function Historico() {
    return (
        <main className={styles.historico}>
            <Header icon={<MdOutlineNavigateNext />} text="Histórico" />
            
            <Construction />
        </main>
    );
}
export default Historico;
