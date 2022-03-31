import Itens from "./Itens";
import itemsList from "../../listaItems/Index";

import styles from "../../styles/ProdutosInicio.module.scss";

function Index() {
  return (
    <div className={styles.container}>
      <h1 className={styles.inicioTitulo}>EM DESTAQUE</h1>
      {itemsList
        .filter((item) => item.destaque === true)
        .map((i, key) => (
          <Itens
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
        ))}
    </div>
  );
}

export default Index;
