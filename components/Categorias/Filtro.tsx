import { useRouter } from "next/router";

import itemsList from "../../listaItems/Index";
import Item from "../Item/Item";

import styles from "../../styles/Categorias.module.scss";
import { useEffect } from "react";

interface Props {
  filtro: string;
}

function Filtro({ filtro }: Props) {
  const router = useRouter();
  const { category } = router.query;
  const items = itemsList.filter((i) => i.categoria === category);
  const itemsMenorPreco = items.slice().sort((a, b) => {
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
  const itemsMaiorPreco = items.slice().sort((a, b) => {
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

  function renderItems(opt: string) {
    if (opt === "Padrão") {
      return items.map((i, key) => (
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
      return itemsMenorPreco.map((i, key) => (
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
      return itemsMaiorPreco.map((i, key) => (
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

  return <div className={styles.itens}>{renderItems(filtro)}</div>;
}

export default Filtro;
