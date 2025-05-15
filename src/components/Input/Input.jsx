
import styles from "./Input.module.scss"

// eslint-disable-next-line react/prop-types
function Input({type = "", placeholder = "", label = "",  id, value, onChange, name, autoComplete = "on", min, title}) {
    return (
        <div className={styles.containerInput}>
            {label && <label htmlFor={id} className={styles.label}>{label}</label>}
            <input type={type}  id={id} placeholder={placeholder} className={styles.input} value={value} onChange={onChange} name={name} required autoComplete={autoComplete} min={min}  title={title}/>
        </div>
    )
}

export default Input