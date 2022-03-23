import Navbar from "../Navbar/index";
import Footer from "../Footer/index";
import Product from "./singleItem";
import itemsList from "../../listaItems/index";
import { useRouter } from "next/router";
import styles from "../../styles/Categorias.module.scss";

interface Props {
  listaItem: object[];
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
          {items[0].categoria.replace(/-/g, " ").toUpperCase()}
        </h1>
        <div className={styles.list}>
          {items.map((i, key) => (
            <Product
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
      </div>
      <Footer />
    </div>
  );
}

export default Index;
