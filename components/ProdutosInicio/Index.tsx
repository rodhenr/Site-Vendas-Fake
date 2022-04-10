import Item from "../Item/Item";
import itemsList from "../../listaItems/Index";

import styles from "../../styles/ProdutosInicio.module.scss";

function Index() {
  return (
    <main className={styles.container}>
      <h1 className={styles.inicioTitulo}>PROMOÇÕES</h1>
      <div className={styles.itens}>
        {itemsList
          .filter((item) => item.promo === true)
          .map((i, key) => (
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
              promo={i.promo}
            />
          ))}
      </div>
      <h1 className={styles.inicioTitulo}>EM DESTAQUE</h1>
      <div className={styles.itens}>
        {itemsList
          .filter((item) => item.destaque === true)
          .map((i, key) => (
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
              promo={i.promo}
            />
          ))}
      </div>
    </main>
  );
}

export default Index;
