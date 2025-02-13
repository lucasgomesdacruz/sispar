import styles from "./Analysis.module.scss"

function Analysis({icon, text="", spanClass = ""}) {
    return (
        <>
            <section className={styles.analysis}>
                <span className={`${spanClass}`}>{icon}</span> <p>{text}</p>
            </section>
        </>
    )
}

export default Analysis;