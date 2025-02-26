import styles from "./NotFound.module.scss"

import { Link } from "react-router-dom"

function NotFound() {
    return (
        <main className={styles.analises}>

            <div className={styles.constructionContainer}>
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Detective%20Medium-Light%20Skin%20Tone.png" alt="Man Detective Medium-Light Skin Tone" width="25" height="25" />
                <h1 className={styles.constructionText}>404 - Página não encontrada <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Confused%20Face.png" alt="Confused Face" width="25" height="25" /></h1>
                <p>A página que você está tentando acessar não existe.</p>
                <Link to="/">Voltar para o Login</Link>
            </div>
            
        </main>
    )
}

export default NotFound;