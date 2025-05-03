import { FaUserCircle } from "react-icons/fa"
import styles from "./Perfil.module.scss"

const Perfil = () => {
  return (
    <main className={styles.perfil}>
        <section className={styles.userInfo}>
            <FaUserCircle />
            <h2>Dominick Silva</h2>
            <p>Comércio Exterior</p>
        </section>

    </main>
    
  )
}

export default Perfil