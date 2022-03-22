import HomeItems from "./homeItems";
import itemsList from "../../listaItems/index";
import styles from "../../styles/HomeProducts.module.scss";

function index() {
  return (
    <div className={styles.container}>
      {itemsList.map((i, key) => (
        <HomeItems
          array={i}
          key={key}
          img={i.img}
          name={i.name}
          pathName={i.pathName}
          pPrazo={i.pPrazo}
          category={i.categoria}
        />
      ))}
    </div>
  );
}

export default index;
