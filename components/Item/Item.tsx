import Image from "next/image";
import Link from "next/link";

import Preco from "./Precos";

import styles from "../../styles/Item.module.scss";

interface Props {
  modelo: string;
  categoria: string;
  img: string;
  id: string;
  fabricante: string;
  name: string;
  pathName: string;
  pPrazo: number;
  garantia: string;
  specs: object[];
  promo: boolean;
}

function Item(props: Props) {
  const { categoria, img, name, pathName, pPrazo, promo } = props;

  return (
    <div className={styles.container}>
      <div className={styles.imagem}>
        {promo ? (
          <div className={styles.promo}>
            <p>PROMOÇÃO</p>
          </div>
        ) : null}
        <Link href={`/${categoria}/${pathName}`} passHref>
          <Image
            src={img}
            alt="processador"
            layout="fill"
            objectFit="contain"
          />
        </Link>
      </div>

      <div className={styles.nome}>
        <Link href={`/${categoria}/${pathName}`} passHref>
          <h2>{name}</h2>
        </Link>
      </div>
      <Preco pPrazo={pPrazo} promo={promo} />
    </div>
  );
}

export default Item;
