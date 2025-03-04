import styles from "./Analises.module.scss"

import { MdOutlineNavigateNext } from "react-icons/md"
import Header from "../../components/header/Header.jsx"
import Construction from "../../components/construction/Construction.jsx"
import { Helmet } from "react-helmet-async"

function Analises() {
    return (
        <>
            <Helmet>
                <title>Análises de Reembolsos | SISPAR</title>
                <meta
                name="description"
                content="Acesse as análises detalhadas das suas solicitações de reembolso e despesas."
                />
                <meta
                name="keywords"
                content="análises, reembolsos, solicitações, financeiro, despesas, relatórios, análises financeiras"
                />
                <meta name="author" content="Nome da Empresa ou Seu Nome" />
                <meta name="robots" content="index, follow" />

                <meta property="og:title" content="Análises de Reembolsos | SISPAR" />
                <meta
                property="og:description"
                content="Acesse as análises detalhadas das suas solicitações de reembolso e despesas."
                />
                <meta property="og:image" content="URL_da_imagem_de_compartilhamento" />
                <meta property="og:url" content="URL_da_sua_página" />
                <meta property="og:type" content="website" />

                <meta name="twitter:title" content="Análises de Reembolsos | SISPAR" />
                <meta
                name="twitter:description"
                content="Acesse as análises detalhadas das suas solicitações de reembolso e despesas."
                />
                <meta name="twitter:image" content="URL_da_imagem_de_compartilhamento" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <main className={styles.analises}>
                <Header  icon={<MdOutlineNavigateNext />} text="Análises"/>

                <Construction />
            </main>
        </>
        
    )
}

export default Analises