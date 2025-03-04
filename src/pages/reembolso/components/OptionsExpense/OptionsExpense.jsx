import styles from "./OptionsExpense.module.scss"

import { AiOutlineCaretDown } from "react-icons/ai"

function OptionsExpense({ onChange, value }) {
    return (
        <div className={styles.containerSelect}>
            <label htmlFor="tipoDespesa">Tipo de Despesa</label>
            <select className={styles.select} name="tipoDespesa" id="tipoDespesa"  value={value} onChange={onChange}>
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
    )
}

export default OptionsExpense