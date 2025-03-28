import { Helmet } from "react-helmet-async";
import logo from "../../assets/images/TelaLogin/logo.png"
import styles from "./Recuperar.module.scss"
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/button/Button.jsx";
import { Link } from "react-router-dom";

function Recuperar() {

    const handleSubmit = (event) => {
        event.preventDefault()
        alert("Form enviado")
    }

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
            <main className={styles.recover}>
                <div>
                    <img src={logo} alt="Lodo da wison sons" />
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <fieldset>
                        <Input type="text" label="CPF"/>
                        <Input type="email" label="Confirmar Email"/>
                    </fieldset>

                    <Button text="Recuperar" type="submit" className={styles.btnDark} />
                    <p className={styles.enter}>Ja possui uma conta? <Link to="/">Entrar</Link></p>
                </form>
            </main>
        </>
        
    )
}

export default Recuperar;