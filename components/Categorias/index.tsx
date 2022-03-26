import Navbar from "../Navbar/index";
import Footer from "../Footer/index";
import Product from "./SingleItem";
import itemsList from "../../listaItems/index";
import { useRouter } from "next/router";
import styles from "../../styles/Categorias.module.scss";

function Index() {
  const router = useRouter();
  const { category } = router.query;
  const items = itemsList.filter((i) => i.categoria === category);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.value);
  }

  return (
    <div>
      <Navbar />
      <div className={styles.containerCategoria}>
        <div className={styles.categoriaTopo}>
          <h1 className={styles.categName}>
            {items[0].categoria.replace(/-/g, " ").toUpperCase()}
          </h1>
          <div>
            <p>Filtrar</p>
            <select onChange={handleChange}>
              <option value="padrao">Padrão</option>
              <option value="maior">Menor Valor</option>
              <option value="menor">Maior Valor</option>
            </select>
          </div>
        </div>
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
