import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import Item from "../Item/Item";
import itemsList from "../../listaItems";

import styles from "../../styles/Categorias.module.scss";

function Busca() {
  const router = useRouter();
  const query = router.query.q;
  const [filtro, setFiltro] = useState("Padrão");
  const itens = itemsList.filter((i) => i.tags.some((j) => j === query));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setFiltro("Padrão");
  }, [query]);

  const itensMenorPreco = itens.slice().sort((a, b) => {
    if (a.promo && b.promo) {
      return a.pPrazo * 0.7 > b.pPrazo * 0.7 ? 1 : -1;
    } else if (a.promo) {
      return a.pPrazo * 0.7 > b.pPrazo * 0.85 ? 1 : -1;
    } else if (b.promo) {
      return a.pPrazo * 0.85 > b.pPrazo * 0.7 ? 1 : -1;
    } else {
      return a.pPrazo * 0.85 > b.pPrazo * 0.85 ? 1 : -1;
    }
  });
  const itensMaiorPreco = itens.slice().sort((a, b) => {
    if (a.promo && b.promo) {
      return a.pPrazo * 0.7 > b.pPrazo * 0.7 ? -1 : 1;
    } else if (a.promo) {
      return a.pPrazo * 0.7 > b.pPrazo * 0.85 ? -1 : 1;
    } else if (b.promo) {
      return a.pPrazo * 0.85 > b.pPrazo * 0.7 ? -1 : 1;
    } else {
      return a.pPrazo * 0.85 > b.pPrazo * 0.85 ? -1 : 1;
    }
  });

  function renderItens(opt: string) {
    if (opt === "Padrão") {
      return itens.map((i, key) => (
        <Item
          modelo={i.modelo}
          key={key}
          img2={i.img2}
          img={i.img}
          name={i.name}
          pathName={i.pathName}
          pPrazo={i.pPrazo}
          categoria={i.categoria}
          fabricante={i.fabricante}
          id={i.id}
          garantia={i.garantia}
          specs={i.specs}
          promo={i.promo}
        />
      ));
    } else if (opt === "Menor Preço") {
      return itensMenorPreco.map((i, key) => (
        <Item
          modelo={i.modelo}
          key={key}
          img2={i.img2}
          img={i.img}
          name={i.name}
          pathName={i.pathName}
          pPrazo={i.pPrazo}
          categoria={i.categoria}
          fabricante={i.fabricante}
          id={i.id}
          garantia={i.garantia}
          specs={i.specs}
          promo={i.promo}
        />
      ));
    } else if (opt === "Maior Preço") {
      return itensMaiorPreco.map((i, key) => (
        <Item
          modelo={i.modelo}
          key={key}
          img2={i.img2}
          img={i.img}
          name={i.name}
          pathName={i.pathName}
          pPrazo={i.pPrazo}
          categoria={i.categoria}
          fabricante={i.fabricante}
          id={i.id}
          garantia={i.garantia}
          specs={i.specs}
          promo={i.promo}
        />
      ));
    }
  }

  function handleFiltro(opt: string) {
    setFiltro(opt);
    setOpen(false);
  }

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <main className={styles.container}>
      <div className={styles.containerFiltro}>
        <div className={styles.buscaDesc}>
          <p>Você pesquisou por:</p>
          <h1>{String(query).toUpperCase()}</h1>
        </div>

        <div className={styles.filtro}>
          <p>FILTRAR:</p>
          <div
            className={
              open
                ? `${styles.botaoOrdenar} ${styles.ativo}`
                : styles.botaoOrdenar
            }
          >
            <button onClick={handleOpen}>
              {filtro}
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
            <ul>
              <li onClick={() => handleFiltro("Padrão")}>Padrão</li>
              <li onClick={() => handleFiltro("Menor Preço")}>Menor Preço</li>
              <li onClick={() => handleFiltro("Maior Preço")}>Maior Preço</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={
          itens.length === 0 ? styles.buscaNenhum : styles.containerItens
        }
      >
        {itens.length === 0 ? (
          <h1>Nenhum item encontrado</h1>
        ) : (
          renderItens(filtro)
        )}
      </div>
    </main>
  );
}

export default Busca;
