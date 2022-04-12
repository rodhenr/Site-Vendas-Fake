import { useState } from "react";
import { useRouter } from "next/router";

import Navbar from "../Navbar/Index";
import Footer from "../Informacoes/Index";
import Filtro from "./Filtro";
import itemsList from "../../listaItems/Index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/Categorias.module.scss";

function Index() {
  const [filtro, setFiltro] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { category } = router.query;
  const items = itemsList.filter((i) => i.categoria === category);

  function handleChange(opt: string) {
    setFiltro(opt);
  }

  function handleState() {
    setOpen(!open);
  }

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.containerTopo}>
          <h1 className={styles.categoriaNome}>
            {items[0].categoria.replace(/-/g, " ").toUpperCase()}
          </h1>
          <div className={styles.containerFiltro}>
            <p>FILTRAR:</p>
            <div
              className={
                open
                  ? `${styles.botaoOrdenar} ${styles.ativo}`
                  : styles.botaoOrdenar
              }
            >
              <button onClick={handleState}>
                <span>Ordenar por</span>
                <FontAwesomeIcon icon={faAngleDown} />
              </button>
              <ul>
                <li onClick={() => handleChange("menor")}>Menor Preço</li>
                <li onClick={() => handleChange("maior")}>Maior Preço</li>
              </ul>
            </div>
          </div>
        </div>
        <Filtro filtro={filtro} />
      </div>
      <Footer />
    </div>
  );
}

export default Index;
