import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import Preco from "./Precos";

import styles from "../../styles/Item.module.scss";

interface Props {
  modelo: string;
  categoria: string;
  img: string;
  img2: string;
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
  const { categoria, img, img2, name, pathName, pPrazo, promo } = props;
  const [hover, setHover] = useState(false);

  return (
    <>
      <Link href={`/${categoria}/${pathName}`} passHref>
        <div
          className={styles.container}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          data-cy="item"
        >
          <div className={styles.imagem}>
            {promo ? (
              <div className={styles.promo}>
                <p>PROMOÇÃO</p>
              </div>
            ) : null}
            <Image
              src={hover ? img2 : img}
              alt="processador"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className={styles.nome}>
            <Link href={`/${categoria}/${pathName}`} passHref>
              <h2>{name}</h2>
            </Link>
          </div>
          <Preco pPrazo={pPrazo} promo={promo} />
        </div>
      </Link>
    </>
  );
}

export default Item;
