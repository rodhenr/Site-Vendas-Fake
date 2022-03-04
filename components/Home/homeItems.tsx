import Image from "next/image";
import styles from "../../styles/HomeProducts.module.scss";

interface Props {
  img: string;
  desc: string;
  precoPrazo: string;
  precoVista: string;
}

function homeItems({ img, desc, precoVista, precoPrazo }: Props) {
  return (
    <div className={styles.itemsContainer}>
      <Image src={img} alt="processador" height={200} width={200} />
      <h1>{desc}</h1>
      <p className={styles.precoP}>
        R$ {precoPrazo} <p>em até 12x no cartão</p>
      </p>
      <p className={styles.precoV}>
        R$ {precoVista} <p>à vista no boleto</p>
      </p>
      <button>COMPRAR</button>
    </div>
  );
}

export default homeItems;
