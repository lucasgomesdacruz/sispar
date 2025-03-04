import { Helmet } from "react-helmet-async";
import Construction from "../../components/construction/Construction.jsx";
import styles from "./Recuperar.module.scss"

function Recuperar() {
    return (
        <>
            <Helmet>
                <title>Recuperar Conta | SISPAR</title>
                <meta
                name="description"
                content="Recupere o acesso à sua conta SISPAR de forma rápida e segura."
                />
                <meta
                name="keywords"
                content="recuperar conta, senha, acesso, SISPAR, redefinir senha, login"
                />
                <meta name="author" content="Nome da Empresa ou Seu Nome" />
                <meta name="robots" content="index, follow" />

                <meta property="og:title" content="Recuperar Conta | SISPAR" />
                <meta
                property="og:description"
                content="Recupere o acesso à sua conta SISPAR de forma rápida e segura."
                />
                <meta property="og:image" content="URL_da_imagem_de_compartilhamento" />
                <meta property="og:url" content="URL_da_sua_página" />
                <meta property="og:type" content="website" />

                <meta name="twitter:title" content="Recuperar Conta | SISPAR" />
                <meta
                name="twitter:description"
                content="Recupere o acesso à sua conta SISPAR de forma rápida e segura."
                />
                <meta name="twitter:image" content="URL_da_imagem_de_compartilhamento" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <main className={styles.retrieve}>
                <Construction />
            </main>
        </>
        
    )
}

export default Recuperar;