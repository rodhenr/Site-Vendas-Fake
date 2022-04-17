import Image from "next/image";
import Link from "next/link";

import Item from "../Item/Item";
import itemsList from "../../listaItems/Index";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../../styles/ProdutosInicio.module.scss";

function Index() {
  return (
    <main className={styles.container}>
      <div>
        <h1 className={styles.inicioTitulo}>EM DESTAQUE</h1>
        <div className={styles.itens}>
          {itemsList
            .filter((item) => item.destaque === true)
            .map((i, key) => (
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
            ))}
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
            <h1>PROMOÇÕES</h1>
            <p>São várias ofertas para você aproveitar</p>
            <button>COMPRE JÁ</button>
          </div>
          <div className={styles.promocoesItens}>
            <FontAwesomeIcon icon={faArrowLeft} />
            <div className={styles.containerPromoItens}>
              <div className={styles.itensPromo}>
                {itemsList
                  .filter((item) => item.promo === true)
                  .map((i, key) => (
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
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Index;
