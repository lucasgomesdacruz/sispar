import styles from "./Input.module.scss"

function Input({type = "", placeholder = "", label = "", id}) {
    return (
        <div className={styles.containerInput}>
            {label && <label htmlFor={id} className={styles.label}>{label}</label>}
            <input type={type} id={id} placeholder={placeholder} className={styles.input} required />
        </div>
    )
}

export default Input