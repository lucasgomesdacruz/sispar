# 📌Sispar

Sistema de Reembolsos

## 📖 Descrição
Este é um sistema web desenvolvido em React.js que permite aos usuários solicitar reembolsos, verificar análises e acessar o histórico de pedidos. O projeto foi construído utilizando React Router para gerenciar a navegação e SCSS para estilização dos componentes. Também estou utilizando o Helmet para otimizar o SEO do site, gerenciando as meta tags e garantindo um melhor ranqueamento nos motores de busca.

## 🚀 Tecnologias Utilizadas
- React.js
- React Router
- SCSS (SASS)
- React Icons
- Helmet (para SEO)

## O projeto utiliza o React Router para gerenciar a navegação entre as páginas. A estrutura de roteamento está definida no arquivo App.jsx, onde cada rota é associada ao seu respectivo componente:
![codeasdasdasd](https://github.com/user-attachments/assets/d7e2ddb8-2351-43ce-bc10-67b97426af39)

## Componentes 
## Esse componente Input é um componente funcional em React que recebe diversas propriedades (props) para renderizar um campo de entrada de dados personalizável, com base nas necessidades do usuário.
![cadadadodeasdasdasd](https://github.com/user-attachments/assets/16a4cd2b-061a-4bcc-a568-813ca2369938)

## Seo
## Essa abordagem garante que as páginas do SISPAR tenham informações detalhadas para SEO, como descrição, palavras-chave, e informações de compartilhamento em redes sociais.
![coaaaade](https://github.com/user-attachments/assets/239cd742-bc8d-46fb-bff3-e0e0ba0f7d01) ![coaaaaaaade](https://github.com/user-attachments/assets/4bc575b2-5ccd-4d00-bfc1-0257670e15bb)


## login 
## No código da página de Login, eu usei o useNavigate para realizar a navegação programática após o login. Basicamente, assim que o usuário envia o formulário de login, eu redireciono ele para a página de dashboard.
![cadadasdasddsadodeasdasdasd](https://github.com/user-attachments/assets/1b991c04-1d16-4542-8c1e-0864dc8aeef3)

![image](https://github.com/user-attachments/assets/a725c10e-ab53-4416-8306-7e0649c52ec0)

## Dashboard 
## A página de Dashboard foi projetada para fornecer uma visão geral do Sistema de Reembolsos, permitindo que o usuário acesse e visualize informações sobre os pedidos de reembolso de forma organizada. A página está bem estruturada, com seções distintas que facilitam a navegação e a visualização de dados relevantes.
![image](https://github.com/user-attachments/assets/2f2924b1-142f-4f63-99b6-97288fb8670d)

## Reembolso 
##  página de solicitação de reembolso, onde eu tenho um formulário com vários campos para preencher informações sobre o reembolso, como nome, empresa, contas, tipo de despesa, entre outros. Também tenho funcionalidades para salvar os dados, limpar os campos ou excluir linhas da tabela.
![image](https://github.com/user-attachments/assets/68cfb1c2-c745-4bf7-9130-aee4847a026a)

##Validações e avisos com Toast-Notification
![Captura de tela 2025-05-14 143253](https://github.com/user-attachments/assets/0f7b5758-a4bc-49cf-b77a-9ffec397f769)

## Modais
## Os modais são usados para exibir confirmações ou mensagens para o usuário, permitindo que ele tome ações como limpar o formulário ou excluir uma linha da tabela. Eles são uma forma prática de interagir com o usuário sem sair da tela atual.
![image](https://github.com/user-attachments/assets/eb9960b3-bde5-4b3c-b30b-419758e0722e)

## Analise seus reembolsos 
![Captura de tela 2025-05-14 143145](https://github.com/user-attachments/assets/71ae6876-1556-4dfc-8888-3d1578b78614)

## Aviso
## A página de aviso uma seção simples e eficaz para informar os usuários de que uma parte do site ainda está em desenvolvimento.
![image](https://github.com/user-attachments/assets/fa69310a-2adf-4f5f-9b77-a20cfae4e765)

## Veja seu Historico e escluar seu reembolso caso queira
![Captura de tela 2025-05-14 143107](https://github.com/user-attachments/assets/077f7059-810e-4417-bdc6-c598289efcfd)

![Captura de tela 2025-05-14 143208](https://github.com/user-attachments/assets/343aae86-c717-44c0-b513-8463d101728d)

![Captura de tela 2025-05-14 143228](https://github.com/user-attachments/assets/7106b3a0-3bb1-4873-a477-551aaf3220ff)

## NotFound 
## A página NotFound é uma página de erro personalizada, normalmente exibida quando o usuário tenta acessar uma rota que não existe, ou seja, uma página 404. 
![Macbook-Air-localhost (1)](https://github.com/user-attachments/assets/c58f25e7-9809-4220-9ace-b9c7c6c7174f)

## 📋 Formulário de Criação de Conta

## A página de criação de conta permite que novos usuários se registrem no SISPAR preenchendo um formulário com as seguintes informações:

- Nome completo

- Email

- Senha

- Cargo

- Salario


![image](https://github.com/user-attachments/assets/943f538b-5d9f-4a1a-9994-cf6ce92083b1)





## 🔑 Recuperação de Senha

Formulário para recuperação de conta
![image](https://github.com/user-attachments/assets/a1394730-4cdc-4132-b5ef-8a2d5ece2dd4)




## 📂 Estrutura do Projeto

```
📦 src
 ┣ 📂 assets
 ┣ 📂 components
 ┃ ┣ 📂 analysis
 ┃ ┣ 📂 button
 ┃ ┣ 📂 construction
 ┃ ┣ 📂 header
 ┃ ┣ 📂 Input
 ┃ ┣ 📂 Layouts
 ┃ ┣ 📂 modalidades
 ┃ ┗ 📂 navbar
 ┣ 📂 pages
 ┃ ┣ 📂 analises
 ┃ ┃ ┣ 📜 Analises.jsx
 ┃ ┃ ┗ 📜 Analises.module.scss
 ┃ ┣ 📂 criarConta
 ┃ ┃ ┣ 📜 Criar.jsx
 ┃ ┃ ┗ 📜 Criar.module.scss
 ┃ ┣ 📂 dashboard
 ┃ ┃ ┣ 📜 Dashboard.jsx
 ┃ ┃ ┗ 📜 Dashboard.module.scss
 ┃ ┣ 📂 historico
 ┃ ┃ ┣ 📜 Historico.jsx
 ┃ ┃ ┗ 📜 Historico.module.scss
 ┃ ┣ 📂 Login
 ┃ ┃ ┣ 📜 Login.jsx
 ┃ ┃ ┗ 📜 Login.module.scss
 ┃ ┣ 📂 notFound
 ┃ ┃ ┣ 📜 NotFound.jsx
 ┃ ┃ ┗ 📜 NotFound.module.scss
 ┃ ┣ 📂 recuperarSenha
 ┃ ┃ ┣ 📜 Recuperar.jsx
 ┃ ┃ ┗ 📜 Recuperar.module.scss
 ┃ ┗ 📂 reembolso
 ┃ ┃ ┣ 📜 Reembolso.jsx
 ┃ ┃ ┗ 📜 Reembolso.module.scss
 ┣ 📜 App.jsx
 ┗ 📜 router.js
```

## 🔧 Como Rodar o Projeto

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd nome-do-repositorio
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```
5. O projeto estará rodando em `http://localhost:3000`

## 📌 Funcionalidades
- Solicitar novos pedidos de reembolso
- Visualizar análises de reembolsos
- Acessar histórico de solicitações
- Interface responsiva e amigável

## 📜 Licença
Este projeto está sob a licença MIT. Para mais detalhes, consulte o arquivo `LICENSE`.

---
Desenvolvido por Lucas Gomes 🚀


