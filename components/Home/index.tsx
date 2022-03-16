import HomeItems from "./homeItems";
import itemsList from "../itemsList";
import styles from "../../styles/HomeProducts.module.scss";

function index() {
  return (
    <div className={styles.container}>
      {itemsList.map((i, key) => (
        <HomeItems
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
