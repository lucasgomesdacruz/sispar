import styles from "./configuracoes.module.scss"
import Construction from "../../components/construction/Construction"

const configuracoes = () => {
  return (
    <main className={styles.configuracoesBg}>
      <Construction />
    </main>
  )
}

export default configuracoes
