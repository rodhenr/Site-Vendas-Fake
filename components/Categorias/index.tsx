import Navbar from "../Navbar/index";
import Footer from "../Footer/index";
import Product from "./singleItem";
import itemsList from "../../listaItems/index";
import { useRouter } from "next/router";
import styles from "../../styles/Categorias.module.scss";

interface Props {
  listaItem: Array<Object>;
}

function Index({ listaItem }: Props) {
  const router = useRouter();
  const { category } = router.query;
  const items = itemsList.filter((i) => i.categoria === category);

  return (
    <div>
      <Navbar />
      <div className={styles.containerCategoria}>
        <h1 className={styles.categName}>
          {router.route.replace("/", "").toUpperCase()}
        </h1>
        <div className={styles.list}>
          {items.map((i, key) => (
            <Product
              key={key}
              img={i.img}
              pPrazo={i.pPrazo}
              name={i.name}
              pathName={i.pathName}
              category={i.categoria}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
