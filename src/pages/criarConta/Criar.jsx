import { Helmet } from "react-helmet-async";
import styles from "./Criar.module.scss"
import Input from "../../components/Input/Input.jsx";
import logo from "../../assets/images/TelaLogin/logo.png"
import Button from "../../components/button/Button.jsx";

function Criar() {
    
    const handleSubmit = (event) => {
        event.preventDefault()
        alert("Form enviado")
    }

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
                <div>
                    <img src={logo} alt="Lodo da wison sons" />
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <fieldset>
                        <Input type="text" label="Nome completo"/>
                        <div className={styles.container}>
                            <Input type="text" label="CPF"/>
                            <Input type="text" label="Matricula"/>
                            <Input type="date" label="Data de nascimento" placeholder="(DD/MM/AAAA)"/>
                        </div>
                        
                        <Input type="text" label="Telefone" placeholder="(00)0000000000"/>
                        <Input type="text" label="Email"/>
                        <Input type="email" label="Confirmar Email"/>
                        <Input type="password" label="Senha"/>
                        <Input type="password" label="Confirmar senha"/>
                    </fieldset>

                    <Button text="Entrar" type="submit" className={styles.btnDark} />
                    <p className={styles.enter}>Ja possui uma conta? Entrar</p>
                </form>
            </main>
        </>
        
    )
}

export default Criar;