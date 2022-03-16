import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Categorias.module.scss";

interface Props {
  img: string;
  name: string;
  pPrazo: number;
  pathName: string,
  category: string;
}

function singleItem({ img, name, pathName, pPrazo, category }: Props) {
  return (
    <div className={styles.item}>
      <Link href={`${category}/${pathName}`}>
        <Image src={img} alt="processador" height={140} width={140} />
      </Link>
      <Link href={`${category}/${pathName}`}>
        <h1 className={styles.nameItem}>{name}</h1>
      </Link>
      <hr />
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

export default singleItem;
