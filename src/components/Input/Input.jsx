import styles from "./Input.module.scss"

function Input({type = "", placeholder = ""}) {
    return (
        <>
            <input type={type} placeholder={placeholder} className={styles.input} required />
        </>
    )
}

export default Input