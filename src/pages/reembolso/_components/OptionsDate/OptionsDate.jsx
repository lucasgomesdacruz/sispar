import styles from "./OptionsDate.module.scss"
import { AiOutlineCaretDown } from "react-icons/ai";

function OptionsDate({ onChange, value }) {
    return (
        <div className={styles.containerSelectMoeda}>
            <label htmlFor="moeda">Moeda</label>
            <select className={styles.select} name="moeda" id="moeda" value={value} onChange={onChange}>
                <option value="">Selecionar</option>
                <option value="BRL">BRL</option>
                <option value="ARS">ARS</option>
                <option value="USD">USD</option>
            </select>
            <div className={styles.icon}>
                <AiOutlineCaretDown />
            </div>
        </div>
    )
}
export default OptionsDate

