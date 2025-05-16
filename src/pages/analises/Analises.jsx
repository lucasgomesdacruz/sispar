import { useState, useEffect } from "react";
import styles from "./Analises.module.scss";
import Header from "../../components/header/Header.jsx";
import Api from "../../Services/Api.jsx";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import { IoDocumentTextSharp } from "react-icons/io5";

// Import Recharts
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

function Analises() {
  const [reembolsos, setReembolsos] = useState([]);
  const [totalReembolsos, setTotalReembolsos] = useState(0);
  const [dadosGrafico, setDadosGrafico] = useState([]);
  const [dadosEmpresa, setDadosEmpresa] = useState([]);

  const fetchReembolsos = async () => {
    try {
      const response = await Api.get("/colaborador/reembolsos");
      console.log("Dados recebidos:", response.data);
      setReembolsos(response.data);
      calcularTotal(response.data);
      agruparPorTipo(response.data);
      agruparPorEmpresa(response.data);
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

  const agruparPorEmpresa = (dados) => {
    const mapa = new Map();

    dados.forEach(({ empresa, valor_faturado }) => {
      const valor = parseFloat(valor_faturado || 0);
      if (mapa.has(empresa)) {
        mapa.set(empresa, mapa.get(empresa) + valor);
      } else {
        mapa.set(empresa, valor);
      }
    });

    const resultado = Array.from(mapa, ([empresa, valor_faturado]) => ({
      empresa,
      valor_faturado,
    }));

    setDadosEmpresa(resultado);
  };

  useEffect(() => {
    fetchReembolsos();
  }, []);

  // Cores para o gráfico de pizza
  const cores = ["#0844C4", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#A28AC3", "#00B5D8"];

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

        <section className={styles.totalSection}>
          <div className={styles.totalContainer}>
            <div className={styles.contentTitulo}>
              <h1>Painel de Análise de Reembolsos</h1>
            </div>
            <div className={styles.content}>
              <h2>R$ Total de Reembolsos</h2>
              <p>R$ {totalReembolsos.toFixed(2)}</p>
            </div>
          </div>

          {/* Gráfico de barras por tipo de reembolso */}
          <section className={styles.chartSection}>
            <h2>Análise por Tipo de Reembolso</h2>
            <ResponsiveContainer width="100%" height="100%" className={styles.container}>
              <BarChart data={dadosGrafico}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="tipo_reembolso" />
                <YAxis />
                <Tooltip formatter={(value) => `R$ ${value.toFixed(2)}`} />
                <Bar dataKey="valor_faturado" fill="#0844C4" />
              </BarChart>
            </ResponsiveContainer>
          </section>

          {/* Gráfico de pizza por empresa */}
          <section className={styles.chartSection}>
            <h2>Distribuição de Reembolsos por Empresa</h2>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dadosEmpresa}
                  dataKey="valor_faturado"
                  nameKey="empresa"
                  cx="50%"
                  cy="50%"
                  outerRadius={50}
                  fill="#8884d8"
                  label
                >
                  {dadosEmpresa.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={cores[index % cores.length]}
                    />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `R$ ${value.toFixed(2)}`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </section>
        </section>

        {/* Tabela de dados */}
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
      </main>
    </>
  );
}

export default Analises;
