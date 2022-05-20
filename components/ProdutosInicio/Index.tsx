import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Item from "../Item/Item";
import itemsList from "../../listaItems";
import Promo from "./Promo";

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
  const [destaque, setDestaque] = useState<Props[]>([]);
  const [promo, setPromo] = useState<Props[]>([]);

  useEffect(() => {
    getDestaque();
    getPromo();
  }, []);

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

    while (randPromo.length < 8) {
      let newRand = Math.floor(Math.random() * promos.length);
      let newItem = promos[newRand];

      if (randPromo.every((i) => i.id !== newItem.id)) {
        randPromo.push(newItem);
      }
    }

    setPromo([...randPromo]);
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
        <Promo promo={promo} />
      </div>
    </main>
  );
}

export default Index;
