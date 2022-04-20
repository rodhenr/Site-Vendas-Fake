import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Item from "../Item/Item";
import itemsList from "../../listaItems/Index";

import styles from "../../styles/ProdutosInicio.module.scss";

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

function Index() {
  const [left, setLeft] = useState(0);
  const [destaque, setDestaque] = useState<Props[]>([]);
  const [promo, setPromo] = useState<Props[]>([]);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    getDestaque();
    getPromo();
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width, setWidth]);

  function getDestaque() {
    let destaques = itemsList.filter((item) => item.destaque === true);
    let randDestaques: Array<Props> = [];

    while (randDestaques.length < 8) {
      let newRand = Math.floor(Math.random() * destaques.length);
      let newItem = destaques[newRand];

      if (randDestaques.every((i) => i.id !== newItem.id)) {
        randDestaques.push(newItem);
      }
    }

    setDestaque([...randDestaques]);
  }

  function getPromo() {
    let promos = itemsList.filter((item) => item.promo === true);
    let randPromo: Array<Props> = [];

    while (randPromo.length < 6) {
      let newRand = Math.floor(Math.random() * promos.length);
      let newItem = promos[newRand];

      if (randPromo.every((i) => i.id !== newItem.id)) {
        randPromo.push(newItem);
      }
    }

    setPromo([...randPromo]);
  }

  function getPosDireita() {
    if (width < 650) {
      return -1200;
    } else if (width < 1300) {
      return -900;
    } else {
      return -600;
    }
  }

  function getPosDireitaExtra() {
    if (width < 650) {
      return -1250;
    } else if (width < 1300) {
      return -1100;
    } else {
      return -850;
    }
  }

  let posDireita = getPosDireita();
  let posDireitaExtra = getPosDireitaExtra();

  function moverPromo(direcao: string) {
    if (left === 0 && direcao === "direita") {
      setLeft(0);
    } else if (
      (left === posDireita || left === posDireitaExtra) &&
      direcao === "esquerda"
    ) {
      setLeft(posDireitaExtra);
    } else if (direcao === "esquerda") {
      setLeft((st) => st - 300);
    } else if (left === posDireitaExtra && direcao === "direita") {
      setLeft(posDireita);
    } else if (direcao === "direita") {
      setLeft((st) => st + 300);
    }
  }

  return (
    <main className={styles.container}>
      <div>
        <h1 className={styles.inicioTitulo}>EM DESTAQUE</h1>
        <div className={styles.itens}>
          {destaque.map((i, key) => {
            return (
              <Item
                modelo={i.modelo}
                key={key}
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
            );
          })}
        </div>
        <div className={styles.containerDuplo}>
          <Link href="/processador" passHref>
            <div className={styles.bannerUm}>
              <Image
                src={"/images/banner1-desktop.jpg"}
                alt={"banner1"}
                height={300}
                width={500}
              />
            </div>
          </Link>
          <Link href="/placa-de-video" passHref>
            <div className={styles.bannerDois}>
              <Image
                src={"/images/banner2-desktop.jpg"}
                alt={"banner2"}
                height={300}
                width={500}
              />
            </div>
          </Link>
        </div>
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
            <FontAwesomeIcon
              icon={faArrowLeft}
              onClick={() => moverPromo("direita")}
            />
            <div className={styles.containerPromoItens}>
              <div className={styles.itensPromo} style={{ left: `${left}px` }}>
                {promo.map((i, key) => (
                  <div className={styles.item} key={key}>
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
                ))}
              </div>
            </div>
            <FontAwesomeIcon
              icon={faArrowRight}
              onClick={() => moverPromo("esquerda")}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Index;
