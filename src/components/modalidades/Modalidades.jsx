import styles from "./modalidades.module.scss"

function Modalidades({ icon, text=""}) {
    return (
        <article className={styles.containerModalidade}>
            {icon}<h2>{text}</h2>
        </article>
        
    )
}
export default Modalidades