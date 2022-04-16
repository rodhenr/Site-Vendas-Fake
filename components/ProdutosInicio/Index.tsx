import Item from "../Item/Item";
import itemsList from "../../listaItems/Index";

import styles from "../../styles/ProdutosInicio.module.scss";

function Index() {
  return (
    <main className={styles.container}>
      <div>
        <h1 className={styles.inicioTitulo}>PROMOÇÕES</h1>
        <div className={styles.itens}>
          {itemsList
            .filter((item) => item.promo === true)
            .map((i, key) => (
              <Item
                modelo={i.modelo}
                key={key}
                img={i.img}
                img2={i.img2}
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
        <div className={styles.botaoMais}>
          <button>VER MAIS OFERTAS</button>
        </div>
      </div>
      <div>
        <h1 className={styles.inicioTitulo}>EM DESTAQUE</h1>
        <div className={styles.itens}>
          {itemsList
            .filter((item) => item.destaque === true)
            .map((i, key) => (
              <Item
                modelo={i.modelo}
                key={key}
                img={i.img}
                img2={i.img2}
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
        <div className={styles.botaoMais}>
          <button>VER MAIS OFERTAS</button>
        </div>
      </div>
    </main>
  );
}

export default Index;
