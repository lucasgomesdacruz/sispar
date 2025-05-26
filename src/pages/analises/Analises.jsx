import { useState, useEffect } from "react";
import styles from "./Analises.module.scss";
import Header from "../../components/header/Header.jsx";
import Api from "../../Services/Api.jsx";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Helmet } from "react-helmet-async";

// Recharts
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
import { CiFilter } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import { AiOutlineClockCircle, AiOutlineDollarCircle } from "react-icons/ai";

function Analises() {
  const [reembolsos, setReembolsos] = useState([]);
  const [totalReembolsos, setTotalReembolsos] = useState(0);
  const [dadosGrafico, setDadosGrafico] = useState([]);
  const [dadosEmpresa, setDadosEmpresa] = useState([]);
  const [filtro, setFiltro] = useState("todos");

  const [resumo, setResumo] = useState({
    total_solicitados: 0,
    em_analise: 0,
    aprovados: 0,
    rejeitados: 0,
  });

  const fetchReembolsos = async () => {
    try {
      const response = await Api.get("/colaborador/reembolsos");
      const dados = response.data;

      setReembolsos(dados);
      calcularTotal(dados);
      agruparPorTipo(dados);
      agruparPorEmpresa(dados);
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
      mapa.set(tipo_reembolso, (mapa.get(tipo_reembolso) || 0) + valor);
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
      mapa.set(empresa, (mapa.get(empresa) || 0) + valor);
    });
    const resultado = Array.from(mapa, ([empresa, valor_faturado]) => ({
      empresa,
      valor_faturado,
    }));
    setDadosEmpresa(resultado);
  };

  useEffect(() => {
    fetchReembolsos();

    async function fetchResumo() {
      try {
        const response = await Api.get("colaborador/reembolsos/resumo/unico");
        setResumo(response.data);
      } catch (error) {
        console.error("Erro ao buscar resumo dos reembolsos:", error);
      }
    }

    fetchResumo();
  }, []);

  // Mapeia status para filtro, para evitar problemas com maiúsculas e espaços
  const statusMap = {
    todos: "todos",
    analise: "em análise",
    aprovado: "aprovado",
    rejeitado: "rejeitado",
  };

  const filtroAtual = filtro.toLowerCase().trim();

  // Filtra os reembolsos conforme filtro selecionado
  const reembolsosFiltrados = reembolsos.filter((item) => {
    if (filtroAtual === "todos") return true;

    // Normaliza status do item para minúsculo e sem espaços extras
    const statusItem = item.status?.toLowerCase().trim() || "";

    // Ajusta filtro para casos onde 'em análise' vem com espaços ou acentos
    if (filtroAtual === "analise") {
      return statusItem === "em análise" || statusItem === "em analise";
    }

    return statusItem.includes(filtroAtual);
  });

  const cores = [
    "#0844C4",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884d8",
    "#A28AC3",
    "#00B5D8",
  ];

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

            <article className={styles.totalContainerStatus} >
              <div className={styles.content}>
                <div className={styles.contentTitle}>
                  <h2>Total de Reembolsos</h2> <AiOutlineDollarCircle />
                </div>
                <p>R$ {totalReembolsos.toFixed(2)}</p>
              </div>
              <div className={styles.content}>
                <div className={styles.contentTitle}>
                  <h2>Em analise</h2>
                  <AiOutlineClockCircle />
                </div>
                <p>{resumo.em_analise}</p>
              </div>
              <div className={styles.content}>
                <div className={styles.contentTitle}>
                  <h2>Aprovados</h2>
                  <IoMdCheckmarkCircleOutline />
                </div>
                  
                <p>{resumo.aprovados}</p>
              </div>
              <div className={styles.content}>
                <div className={styles.contentTitle}>
                  <h2>Rejeitados</h2> <IoCloseCircleOutline />
                </div>
                <p>{resumo.rejeitados}</p>
              </div>
            </article>
          </div>

          {/* Gráfico de barras por tipo */}
          <article className={styles.chartSection}>
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
          </article>

          {/* Gráfico de pizza por empresa */}
          <article className={styles.chartSection}>
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
          </article>
        </section>

        {/* Tabela */}
        <section className={styles.tableContainer}>
          <table className={styles.customTable}>
            <div className={styles.containerHeader}>
                <div className={styles.containerTr}>
                    <h2>Lista de Reembolsos</h2>
                    <div>
                      
                      <button
                        className={styles.resumoBlue}
                        onClick={() => setFiltro("todos")}
                      >
                       <CiFilter /> Total Solicitados
                      </button>
                    </div>
                    <div>
                      <button
                        className={styles.resumoPurple}
                        onClick={() => setFiltro("analise")}
                      >
                        Em Análise
                      </button>
                    </div>
                    <div>
                      <button
                          className={styles.resumoGreen}
                          onClick={() => setFiltro("aprovado")}
                        >
                        Aprovados
                      </button>
                    </div>
                    <div>
                      <button
                        className={styles.resumoRed}
                        onClick={() => setFiltro("rejeitado")}
                      >
                        Rejeitados
                      </button>
                    </div>
                </div>
            </div>
            <thead className={styles.containerThead}>
              <tr className={styles.containerTr}>
                <th>Colaborador(a)</th>
                <th>Empresa</th>
                <th>Data</th>
                <th>Tipo Reemb.</th>
                <th>Valor Faturado</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className={styles.containerTbody}>
              {reembolsosFiltrados.length > 0 ? (
                reembolsosFiltrados.map((item, index) => (
                  <tr key={index} className={styles.containerTr}>
                    <td>{item.colaborador}</td>
                    <td>{item.empresa}</td>
                    <td>{item.data}</td>
                    <td>{item.tipo_reembolso}</td>
                    <td>R$ {parseFloat(item.valor_faturado).toFixed(2)}</td>
                    <td>{item.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center", padding: "1rem" }}>
                    Nenhum registro encontrado para o filtro selecionado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}

export default Analises;
