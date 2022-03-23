import HomeItems from "./HomeItems";
import itemsList from "../../listaItems/index";
import styles from "../../styles/HomeProducts.module.scss";

function index() {
  return (
    <div className={styles.container}>
      <h1 className={styles.homeTitle}>EM DESTAQUE</h1>
      {itemsList
        .filter((item) => item.destaque === true)
        .map((i, key) => (
          <HomeItems
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

export default index;
