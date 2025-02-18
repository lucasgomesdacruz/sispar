import styles from "./Analysis.module.scss"

function Analysis({icon, number, text="", spanClass = ""}) {
    return (
        <>
            <section className={styles.analysis}>
                <span className={`${spanClass}`}>{icon}</span> <strong>{number}</strong> <p>{text}</p>
            </section>
        </>
    )
}

export default Analysis;