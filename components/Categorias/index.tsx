import { useState } from "react";
import { useRouter } from "next/router";

import Navbar from "../Navbar/Index";
import Footer from "../Footer/Index";
import Item from "../Item/Item";
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
  const itemsMenorPreco = items
    .slice()
    .sort((a, b) => (a.pPrazo > b.pPrazo ? 1 : -1));
  const itemsMaiorPreco = items
    .slice()
    .sort((a, b) => (a.pPrazo > b.pPrazo ? -1 : 1));

  function handleChange(opt: string) {
    setFiltro(opt);
  }

  function renderItems(opt: string) {
    if (opt === "") {
      return items.map((i, key) => (
        <Item
          key={key}
          img={i.img}
          name={i.name}
          pathName={i.pathName}
          pPrazo={i.pPrazo}
          categoria={i.categoria}
          fabricante={i.fabricante}
          id={i.id}
          garantia={i.garantia}
          specs={i.specs}
        />
      ));
    } else if (opt === "menor") {
      return itemsMenorPreco.map((i, key) => (
        <Item
          key={key}
          img={i.img}
          name={i.name}
          pathName={i.pathName}
          pPrazo={i.pPrazo}
          categoria={i.categoria}
          fabricante={i.fabricante}
          id={i.id}
          garantia={i.garantia}
          specs={i.specs}
        />
      ));
    } else if (opt === "maior") {
      return itemsMaiorPreco.map((i, key) => (
        <Item
          key={key}
          img={i.img}
          name={i.name}
          pathName={i.pathName}
          pPrazo={i.pPrazo}
          categoria={i.categoria}
          fabricante={i.fabricante}
          id={i.id}
          garantia={i.garantia}
          specs={i.specs}
        />
      ));
    }
  }

  function handleState() {
    setOpen(!open);
  }

  return (
    <div>
      <Navbar />
      <div className={styles.containerCategoria}>
        <div className={styles.categoriaTopo}>
          <h1 className={styles.categoriaNome}>
            {items[0].categoria.replace(/-/g, " ").toUpperCase()}
          </h1>
          <div className={styles.categoriaOpcao}>
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
        <div className={styles.containerItens}>{renderItems(filtro)}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
