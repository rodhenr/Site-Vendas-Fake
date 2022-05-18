import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import Navbar from "../Navbar/index";
import Footer from "../Informacoes/Index";
import Itens from "./Itens";
import FiltroTopo from "./FiltroTopo";

import styles from "../../styles/Categorias.module.scss";

function Index() {
  const [filtro, setFiltro] = useState("Padrão");
  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    setFiltro("Padrão");
  }, [category]);

  function handleFiltro(opt: string) {
    setFiltro(opt);
  }

  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <FiltroTopo handleFiltro={handleFiltro} filtro={filtro} />
        <Itens filtro={filtro} category={category} />
      </main>
      <Footer />
    </>
  );
}

export default Index;
