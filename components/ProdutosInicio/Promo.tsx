import { useEffect, useState } from "react";
import Link from "next/link";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Item from "../Item/Item";

import styles from "../../styles/ProdutosInicio.module.scss";

interface Item {
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

interface Props {
  promo: Item[];
}

function Promo({ promo }: Props) {
  const [index, setIndex] = useState({ left: 0, right: 0 });
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    function getIndex() {
      if (width < 768) {
        setIndex({ left: 0, right: 0 });
      } else if (width > 768 && width < 1299) {
        setIndex({ left: 0, right: 1 });
      } else if (width > 1300) {
        setIndex({ left: 0, right: 2 });
      }
    }

    handleResize();
    getIndex();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  function movePromo(direction: string) {
    if (direction === "left" && index.left > 0) {
      setIndex((prev) => ({
        right: prev.right - 1,
        left: prev.left - 1,
      }));
    }
    if (direction === "right" && index.right < 7) {
      setIndex((prev) => ({
        right: prev.right + 1,
        left: prev.left + 1,
      }));
    } else {
      return;
    }
  }

  return (
    <div className={styles.containerPromocoes}>
      <div className={styles.promocoesDesc}>
        <div className={styles.desc}>
          <h1>PROMOÇÕES</h1>
          <span>São várias ofertas para você aproveitar</span>
        </div>
        <Link href={"/ofertas"} passHref>
          <button>COMPRE JÁ</button>
        </Link>
      </div>
      <div className={styles.promocoesItens}>
        <div
          className={
            index.left !== 0
              ? `${styles.promoLeft} ${styles.active}`
              : styles.promoLeft
          }
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={() => movePromo("left")}
            data-cy="promo-move-left"
          />
        </div>
        <div className={styles.containerPromoItens}>
          <div className={styles.itensPromo}>
            {promo.map((i, key) => {
              if (key >= index.left && key <= index.right) {
                return (
                  <div className={styles.item} key={key} data-cy="promo-item">
                    <Item
                      modelo={i.modelo}
                      img={i.img}
                      img2={i.img2}
                      name={i.name}
                      pathName={i.pathName}
                      pPrazo={i.pPrazo}
                      categoria={i.categoria}
                      fabricante={i.fabricante}
                      id={i.id}
                      garantia={i.garantia}
                      specs={i.specs}
                      promo={i.promo}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div
          className={
            index.right < 7
              ? `${styles.promoRight} ${styles.active}`
              : styles.promoRight
          }
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            onClick={() => movePromo("right")}
            data-cy="promo-move-right"
          />
        </div>
      </div>
    </div>
  );
}

export default Promo;
