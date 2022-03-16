import Navbar from "../Navbar/index";
import Footer from "../Footer/index";
import Image from "next/image";
import styles from "../../styles/ProductPage.module.scss";

interface Props {
  img: string;
  garantia: string;
  name: string;
  pPrazo: number;
  specs: Array<string>;
}

function index({ img, garantia, name, pPrazo, specs }: Props) {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.productContainer}>
          <div className={styles.img}>
            <Image src={img} alt="testando" height={350} width={350} />
          </div>
          <p className={styles.garantia}>Garantia de {garantia}</p>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.pPrazo}>
            R$ {pPrazo.toFixed(2).replace(".", ",")}
          </p>
          <p className={styles.pPrazoDesc}>em até 12x no cartão</p>
          <p className={styles.pVista}>
            R$ {(pPrazo * 0.85).toFixed(2).replace(".", ",")}
          </p>
          <p className={styles.pVistaDesc}>à vista no boleto</p>
          <button className={styles.buyButton}>COMPRAR</button>
          <div className={styles.specs}>
            <h1>Especificações</h1>
            <hr />
            {specs.map((i, key) => (
              <p key={key} className={styles.specsDesc}>
                - {i}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default index;
