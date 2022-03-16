import Navbar from "../Navbar/index";
import Footer from "../Footer/index";
import Product from "./singleItem";
import itemsList from "../itemsList";
import styles from "../../styles/Categorias.module.scss";

function index() {
  return (
    <div>
      <Navbar />
      <div className={styles.containerCategoria}>
        <h1 className={styles.categName}>{"PLACA DE VÍDEO"}</h1>
        <div className={styles.list}>
          {itemsList.map((i, key) => (
            <Product
              key={key}
              img={i.img}
              pPrazo={i.pPrazo}
              name={i.name}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default index;
