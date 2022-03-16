import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/HomeProducts.module.scss";

interface Props {
  img: string;
  name: string;
  pPrazo: number;
}

function homeItems({ img, name, pPrazo }: Props) {
  return (
    <div className={styles.itemsContainer}>
      <Image src={img} alt="processador" height={200} width={200} />
      <h1>
        <Link href={`/cpu/${name.replace("/ /g", "-")}`}>{name}</Link>
      </h1>
      <p className={styles.pPrazo}>R$ {pPrazo.toFixed(2).replace(".", ",")}</p>
      <p className={styles.pPrazoDesc}>em até 12x no cartão</p>
      <p className={styles.pVista}>
        R$ {(pPrazo * 0.85).toFixed(2).replace(".", ",")}
      </p>
      <p className={styles.pVistaDesc}>à vista no boleto</p>
      <button>COMPRAR</button>
    </div>
  );
}

export default homeItems;
