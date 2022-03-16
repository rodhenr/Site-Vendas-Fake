import Navbar from "../Navbar/index";
import Footer from "../Footer/index";
import Product from "./singleItem";
import itemsList from "../itemsList";
import { useRouter } from "next/router";
import styles from "../../styles/Categorias.module.scss";

function Index() {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <div className={styles.containerCategoria}>
        <h1 className={styles.categName}>
          {router.route.replace("/", "").toUpperCase()}
        </h1>
        <div className={styles.list}>
          {itemsList.map((i, key) => (
            <Product
              key={key}
              img={i.img}
              pPrazo={i.pPrazo}
              name={i.name}
              category={router.route}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
