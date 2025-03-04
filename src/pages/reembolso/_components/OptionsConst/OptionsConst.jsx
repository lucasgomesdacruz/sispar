import { AiOutlineCaretDown } from "react-icons/ai"
import styles from "./OptionsConst.module.scss"

function OptionsConst({ onChange, value }) {
    return (
        <div className={styles.containerSelect}>
            <label htmlFor="centroCusto">Centro de Custo</label>
            <select className={styles.select} name="centroCusto" id="centroCusto" value={value} onChange={onChange} >
                <option value="">Selecionar</option>
                <option value="controles-internos">1100109002 - FIN COTROLES INTERNOS MTZ</option>
                <option value="presidencia-financas">1100109002 FIM VICE-PRESIDENCIA FINANCAS MTZ</option>
                <option value="contabilidade-mtz">1100109002 FIN CONTABILIDADE MTZ</option>
                
            </select>
            <div className={styles.icon}>
                <AiOutlineCaretDown />
            </div>
        </div>
    )   
}

export default OptionsConst