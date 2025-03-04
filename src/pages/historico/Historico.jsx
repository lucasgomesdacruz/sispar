import styles from "./Historico.module.scss";
import Header from "../../components/header/Header.jsx";
import { MdOutlineNavigateNext } from "react-icons/md";
import Construction from "../../components/construction/Construction.jsx";
import { Helmet } from "react-helmet-async";

function Historico() {
    return (
        <>
            <Helmet>
                <title>Histórico de Reembolsos | SISPAR</title>
                <meta
                name="description"
                content="Consulte o histórico de suas solicitações de reembolso de forma fácil e eficiente."
                />
                <meta
                name="keywords"
                content="histórico, reembolsos, solicitações, financeiro, despesas, histórico de reembolsos"
                />
                <meta name="author" content="Nome da Empresa ou Seu Nome" />
                <meta name="robots" content="index, follow" />

                <meta property="og:title" content="Histórico de Reembolsos | SISPAR" />
                <meta
                property="og:description"
                content="Consulte o histórico de suas solicitações de reembolso de forma fácil e eficiente."
                />
                <meta property="og:image" content="URL_da_imagem_de_compartilhamento" />
                <meta property="og:url" content="URL_da_sua_página" />
                <meta property="og:type" content="website" />

                <meta name="twitter:title" content="Histórico de Reembolsos | SISPAR" />
                <meta
                name="twitter:description"
                content="Consulte o histórico de suas solicitações de reembolso de forma fácil e eficiente."
                />
                <meta name="twitter:image" content="URL_da_imagem_de_compartilhamento" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <main className={styles.historico}>
                <Header icon={<MdOutlineNavigateNext />} text="Histórico" />
                
                <Construction />
            </main>
        </>
        
    );
}
export default Historico;
