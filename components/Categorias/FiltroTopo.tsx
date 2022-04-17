import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import itemsList from "../../listaItems/Index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/Categorias.module.scss";

interface Props {
  handleFiltro: Function;
  filtro: string;
}

function FiltroTopo({ handleFiltro, filtro }: Props) {
  const router = useRouter();
  const { category } = router.query;
  const items = itemsList.filter((i) => i.categoria === category);

  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  function handleEscolhaFiltro(opt: string) {
    handleFiltro(opt);
    setOpen(false);
  }

  return (
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
          <button onClick={handleOpen}>
            {filtro}
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
          <ul>
            <li onClick={() => handleEscolhaFiltro("Padrão")}>Padrão</li>
            <li onClick={() => handleEscolhaFiltro("Menor Preço")}>
              Menor Preço
            </li>
            <li onClick={() => handleEscolhaFiltro("Maior Preço")}>
              Maior Preço
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FiltroTopo;
