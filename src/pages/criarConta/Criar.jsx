import { Helmet } from "react-helmet-async";
import Construction from "../../components/construction/Construction.jsx";
import styles from "./Criar.module.scss"
function Criar() {
    return (
        <>
            <Helmet>
                <title>Criar Conta | SISPAR</title>
                <meta
                name="description"
                content="Crie sua conta no SISPAR e comece a gerenciar seus reembolsos de forma eficiente."
                />
                <meta
                name="keywords"
                content="criar conta, cadastro, SISPAR, novo usuário, reembolso"
                />
                <meta name="author" content="Nome da Empresa ou Seu Nome" />
                <meta name="robots" content="index, follow" />

                <meta property="og:title" content="Criar Conta | SISPAR" />
                <meta
                property="og:description"
                content="Crie sua conta no SISPAR e comece a gerenciar seus reembolsos de forma eficiente."
                />
                <meta property="og:image" content="URL_da_imagem_de_compartilhamento" />
                <meta property="og:url" content="URL_da_sua_página" />
                <meta property="og:type" content="website" />

                <meta name="twitter:title" content="Criar Conta | SISPAR" />
                <meta
                name="twitter:description"
                content="Crie sua conta no SISPAR e comece a gerenciar seus reembolsos de forma eficiente."
                />
                <meta name="twitter:image" content="URL_da_imagem_de_compartilhamento" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <main className={styles.create}>
                <Construction />
            </main>
        </>
        
    )
}

export default Criar;