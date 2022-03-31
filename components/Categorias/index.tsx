import { useState } from "react";
import { useRouter } from "next/router";

import Navbar from "../Navbar/Index";
import Footer from "../Footer/Index";
import Product from "./SingleItem";
import itemsList from "../../listaItems/Index";

import styles from "../../styles/Categorias.module.scss";

function Index() {
  const [filtro, setFiltro] = useState("padrao");
  const router = useRouter();
  const { category } = router.query;
  const items = itemsList.filter((i) => i.categoria === category);
  const itemsMenorPreco = items
    .slice()
    .sort((a, b) => (a.pPrazo > b.pPrazo ? 1 : -1));
  const itemsMaiorPreco = items
    .slice()
    .sort((a, b) => (a.pPrazo > b.pPrazo ? -1 : 1));

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setFiltro(e.target.value);
  }

  function renderItems(filtro: string) {
    if (filtro === "padrao") {
      return items.map((i, key) => (
        <Product
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
    } else if (filtro === "menor") {
      return itemsMenorPreco.map((i, key) => (
        <Product
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
    } else if (filtro === "maior") {
      return itemsMaiorPreco.map((i, key) => (
        <Product
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

  return (
    <div>
      <Navbar />
      <div className={styles.containerCategoria}>
        <div className={styles.categoriaTopo}>
          <h1 className={styles.categoriaNome}>
            {items[0].categoria.replace(/-/g, " ").toUpperCase()}
          </h1>
          <div>
            <p>Filtrar</p>
            <select onChange={handleChange}>
              <option value="padrao">Padrão</option>
              <option value="menor">Menor Valor</option>
              <option value="maior">Maior Valor</option>
            </select>
          </div>
        </div>
        <div className={styles.containerItens}>{renderItems(filtro)}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
