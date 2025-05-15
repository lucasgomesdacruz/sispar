import { useState, useEffect } from "react";
import styles from "./Analises.module.scss";
import Header from "../../components/header/Header.jsx";
import Api from "../../Services/Api.jsx";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import { IoDocumentTextSharp } from "react-icons/io5";
import logo from "../../assets/images/TelaLogin/logo.png";

// Import Recharts
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function Analises() {
  const [reembolsos, setReembolsos] = useState([]);
  const [totalReembolsos, setTotalReembolsos] = useState(0);
  const [dadosGrafico, setDadosGrafico] = useState([]);

  const fetchReembolsos = async () => {
    try {
      const response = await Api.get("/colaborador/reembolsos");
      console.log("Dados recebidos:", response.data);
      setReembolsos(response.data);
      calcularTotal(response.data);
      agruparPorTipo(response.data);
    } catch (err) {
      console.error("Erro ao buscar reembolsos:", err);
    }
  };

  const calcularTotal = (dados) => {
    const total = dados.reduce(
      (acc, curr) => acc + parseFloat(curr.valor_faturado || 0),
      0
    );
    setTotalReembolsos(total);
  };

  const agruparPorTipo = (dados) => {
    const mapa = new Map();

    dados.forEach(({ tipo_reembolso, valor_faturado }) => {
      const valor = parseFloat(valor_faturado || 0);
      if (mapa.has(tipo_reembolso)) {
        mapa.set(tipo_reembolso, mapa.get(tipo_reembolso) + valor);
      } else {
        mapa.set(tipo_reembolso, valor);
      }
    });

    const resultado = Array.from(mapa, ([tipo_reembolso, total]) => ({
      tipo_reembolso,
      valor_faturado: total,
    }));

    setDadosGrafico(resultado);
  };

  useEffect(() => {
    fetchReembolsos();
  }, []);

  return (
    <>
      <Helmet>
        <title>Análises de Reembolsos | SISPAR</title>
        <meta
          name="description"
          content="Consulte as análises dos reembolsos realizados."
        />
        <meta
          name="keywords"
          content="análises, reembolsos, total, financeiro, despesas"
        />
      </Helmet>

      <main className={styles.analises}>
        <Header icon={<MdOutlineNavigateNext />} text="Análises" />

        {/* Total de reembolsos */}
        <section className={styles.totalSection}>
          <div className={styles.totalContainer}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <h1>Painel de Análise de Reembolsos</h1>
            <h2>Total de Reembolsos</h2>
            <p>R$ {totalReembolsos.toFixed(2)}</p>
          </div>
        </section>

        {/* Tabela */}
        <section className={styles.tableContainer}>
          <table className={styles.customTable}>
            <thead className={styles.containerThead}>
              <tr className={styles.containerTr}>
                <th>Colaborador(a)</th>
                <th>Empresa</th>
                <th>Data</th>
                <th>Motivo</th>
                <th>Tipo Reemb.</th>
                <th>Valor Faturado</th>
              </tr>
            </thead>
            <tbody className={styles.containerTbody}>
              {reembolsos.map((task, index) => (
                <tr key={index} className={styles.containerTr}>
                  <td>{task.colaborador}</td>
                  <td>{task.empresa}</td>
                  <td>{task.data}</td>
                  <td className={styles.motiveHover}>
                    <IoDocumentTextSharp />
                  </td>
                  <td>{task.tipo_reembolso}</td>
                  <td>R$ {task.valor_faturado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Gráfico de barras */}
        <section className={styles.chartSection}>
          <h2>Análise por Tipo de Reembolso</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dadosGrafico}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="tipo_reembolso" />
              <YAxis />
              <Tooltip formatter={(value) => `R$ ${value.toFixed(2)}`} />
              <Bar dataKey="valor_faturado" fill="#0844C4" />
            </BarChart>
          </ResponsiveContainer>
        </section>
      </main>
    </>
  );
}

export default Analises;
