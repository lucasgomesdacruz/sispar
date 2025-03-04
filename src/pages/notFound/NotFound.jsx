import { Helmet } from "react-helmet-async";
import styles from "./NotFound.module.scss"

import { Link } from "react-router-dom"

function NotFound() {
    return (
        <>
            <Helmet>
                <title>Página Não Encontrada | SISPAR</title>
                <meta name="description" content="A página que você está procurando não existe ou foi removida." />
                <meta name="keywords" content="404, página não encontrada, erro, SISPAR" />
                <meta name="author" content="Nome da Empresa ou Seu Nome" />
                <meta name="robots" content="noindex, nofollow" />

                <meta property="og:title" content="Página Não Encontrada | SISPAR" />
                <meta property="og:description" content="A página que você está procurando não existe ou foi removida." />
                <meta property="og:image" content="URL_da_imagem_de_erro_ou_notfound" />
                <meta property="og:url" content="URL_da_página_404" />
                <meta property="og:type" content="website" />

                <meta name="twitter:title" content="Página Não Encontrada | SISPAR" />
                <meta name="twitter:description" content="A página que você está procurando não existe ou foi removida." />
                <meta name="twitter:image" content="URL_da_imagem_de_erro_ou_notfound" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <main className={styles.analises}>
                <div className={styles.constructionContainer}>
                    <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Detective%20Medium-Light%20Skin%20Tone.png" alt="Man Detective Medium-Light Skin Tone" width="25" height="25" />
                    <h1 className={styles.constructionText}>404 - Página não encontrada <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Confused%20Face.png" alt="Confused Face" width="25" height="25" /></h1>
                    <p>A página que você está tentando acessar não existe.</p>
                    <Link to="/">Voltar para o Login</Link>
                </div>
            </main>
        </>
       
    )
}

export default NotFound;