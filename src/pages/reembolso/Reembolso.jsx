import styles from "./Reembolso.module.scss"

import Input from "../../../src/components/input/Input.jsx"

function Reembolso() {
    return (

        <div className={styles.reembolso}>

            <main className={styles.mainContainer}>

                <div className={styles.infoContainer}>
                    
                    <section className={styles.form}>
                        <Input type="text" label="Nome Completo" id="nome"/>
                        <Input type="text" label="Empresa" id="empresa"/>
                        <Input type="text" label="Nº Prest. Contas" id="contas"/>
                        <Input type="text" label="Descrição / Motivo do Reembolso" id="descricao"/>
                    </section>
                    <section className={styles.formDetails}>
                        <Input type="date" label="Data" placeholder="DD/MM/AAAA" id="data"/>
                        <Input type="date" label="Empresa" id="empresa"/>
                        <Input type="date" label="Nº Prest. Contas" id="contas"/>
                        <div className={styles.rows}>
                            <Input type="text" label="Ord. Int." id="descricao"/>
                            <Input type="text" label="PEP" id="pep"/>
                            <Input type="text" label="Div." id="div"/>
                            <Input type="text" label="Dist. / Km" id="km"/>
                            <Input type="text" label="Moeda" id="moedas"/>
                            <Input type="text" label="Valor / Km" id="valor"/>
                            <Input type="text" label="Val. Taxa" id="taxa"/>
                            <Input type="text" label="Val. Faturado" id="val"/>
                            <button>salva+</button>
                            <button>xapagar</button>
                        </div>
                    </section>
                </div>
                <div className={styles.tableContainer}>
                    <table className={styles.tableContent}>
                        <thead>
                            <tr>Colaborador(a)</tr>
                            <tr>Empresa</tr>
                            <tr>Nº Prest.</tr>
                            <tr>Data</tr>
                            <tr>Motivo</tr>
                            <tr>Tipo Reemb.</tr>
                            <tr>Ctr. Custo</tr>
                            <tr>Ord. Int.</tr>
                            <tr>Div.</tr>
                            <tr>PEP</tr>
                            <tr>Moeda</tr>
                            <tr>Dist. Km</tr>
                            <tr>Val. Km</tr>
                            <tr>Val. Faturado</tr>
                            <tr>Despesa</tr>
                        </thead>
                    </table>

                </div>

            </main>
            
        </div>
        
    )
}

export default Reembolso