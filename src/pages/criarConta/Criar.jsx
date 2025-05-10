import { Helmet } from "react-helmet-async";
import styles from "./Criar.module.scss"
import Input from "../../components/Input/Input.jsx";
import logo from "../../assets/images/TelaLogin/logo.png"
import Button from "../../components/button/Button.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Api from "../../Services/Api.jsx";

function Criar() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [salario, setSalario] = useState("")
    
    const criarConta = async (e) => {
        e.preventDefault()

            // Validações simples
        if (!nome || !email || !senha || !cargo || !salario) {
            toast.error("Preencha todos os campos.");
            return;
        }

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!emailValido) {
            toast.error("Email inválido.");
            return;
        }

        if (senha.length < 3 || senha.length > 6) {
            toast.error("A senha deve ter entre 3 e 6 caracteres.");
            return;
        }

        const salarioNumero = Number(salario);

        if (isNaN(salarioNumero) || salarioNumero <= 0 || salarioNumero >= 100000) {
            toast.error("Salário deve ser um número válido maior que 0 e menor que 100.000.");
            return;
        }
        
        try {

            const resposta = await Api.post("/colaborador/cadastrar", {
                "email": email,
                "senha": senha,
                "nome": nome,
                "cargo": cargo,
                "salario": salario
            })
            console.log(resposta.data) // 
            toast.success("Cadastro feito com sucesso!");
                setTimeout(() => {
                navigate("/");
            }, 1500); 
        } catch (error) {
            console.log("Erro ao fazer cadastro", error)
            toast.error(error?.response?.data?.erro || "Erro ao fazer cadastro.");
        }
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
                    <img src={logo} alt="Logo da Wilson Sons" />
                </div>
                <form onSubmit={criarConta}>
                    <fieldset>
                        <Input type="text" label="Nome completo" onChange={ (e) => setNome(e.target.value)}/>
                        <Input type="text" label="Email" onChange={ (e) => setEmail(e.target.value)}/>
                        <Input type="password" label="Senha" onChange={ (e) => setSenha(e.target.value)}/>
                        <Input type="text" label="Cargo" onChange={ (e) => setCargo(e.target.value)}/>
                        <Input type="Number" label="Salario" onChange={ (e) => setSalario(e.target.value)}/>
                    </fieldset>

                    <Button text="Cadastrar" type="submit" className={styles.btnDark} />
                    <p className={styles.enter}>Ja possui uma conta? <Link to="/">Entrar</Link></p>
                </form>
                <ToastContainer position="top-right" autoClose={3000} />
            </main>
        </>
        
    )
}

export default Criar;