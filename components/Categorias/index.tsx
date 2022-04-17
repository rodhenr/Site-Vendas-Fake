import { useEffect, useState } from "react";

import Navbar from "../Navbar/Index";
import Footer from "../Informacoes/Index";
import Itens from "./Itens";
import FiltroTopo from "./FiltroTopo";

import styles from "../../styles/Categorias.module.scss";

function Index() {
  const [filtro, setFiltro] = useState("Padrão");

  function handleFiltro(opt: string) {
    setFiltro(opt);
  }

  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <FiltroTopo handleFiltro={handleFiltro} filtro={filtro} />
        <Itens filtro={filtro} />
      </main>
      <Footer />
    </>
  );
}

export default Index;
