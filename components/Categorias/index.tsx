import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Navbar from "../Navbar/Index";
import Footer from "../Informacoes/Index";
import Filtro from "./Filtro";
import FiltroLateral from "./FiltroLateral";
import itemsList from "../../listaItems/Index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/Categorias.module.scss";

function Index() {
  const [filtro, setFiltro] = useState("Padrão");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { category } = router.query;
  const items = itemsList.filter((i) => i.categoria === category);

  function handleChange(opt: string) {
    setFiltro(opt);
    handleState();
  }

  function handleState() {
    setOpen(!open);
  }

  useEffect(() => {
    setFiltro("Padrão");
  }, [category]);

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.containerTopo}>
          <div className={styles.containerFiltro}>
            <h1 className={styles.categoriaNome}>
              {items[0].categoria.replace(/-/g, " ").toUpperCase()}
            </h1>
            <div className={styles.filtro}>
              <p>FILTRAR:</p>
              <div
                className={
                  open
                    ? `${styles.botaoOrdenar} ${styles.ativo}`
                    : styles.botaoOrdenar
                }
              >
                <button onClick={handleState}>
                  {filtro}
                  <FontAwesomeIcon icon={faAngleDown} />
                </button>
                <ul>
                  <li onClick={() => handleChange("Padrão")}>Padrão</li>
                  <li onClick={() => handleChange("Menor Preço")}>
                    Menor Preço
                  </li>
                  <li onClick={() => handleChange("Maior Preço")}>
                    Maior Preço
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <FiltroLateral />
        </div>
        <Filtro filtro={filtro} />
      </div>
      <Footer />
    </div>
  );
}

export default Index;
