import Image from "next/image";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Link from "next/link";

import { addToCart } from "../../store/slices/cartSlice";
import Navbar from "../Navbar/Index";
import Footer from "../Footer/Index";
import Parcelamento from "./Parcelamento";
import VerMais from "./VerMais";

import {
  faAngleRight,
  faGear,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../../styles/ProdutoPagina.module.scss";

interface Props {
  categoria: string;
  img: string;
  id: string;
  fabricante: string;
  name: string;
  pathName: string;
  pPrazo: number;
  garantia: string;
  specs: object[];
}

function Index(props: Props) {
  const [desc, setDesc] = useState({ sobre: true, spec: false });
  const dispatch = useDispatch();
  const { img, name, specs, pPrazo, categoria, pathName } = props;

  function handleClick() {
    alert("Adicionado ao carrinho com sucesso!");
    dispatch(addToCart(props));
  }

  function handleDesc(state: string) {
    if (state === "sobre") {
      setDesc({
        sobre: true,
        spec: false,
      });
    } else {
      setDesc({
        sobre: false,
        spec: true,
      });
    }
  }

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.containerCaminho}>
          <Link href="/" passHref>
            <span>HOME</span>
          </Link>
          <FontAwesomeIcon icon={faAngleRight} />
          <Link href={`/${categoria}`} passHref>
            <span>{categoria.toUpperCase()}</span>
          </Link>
          <FontAwesomeIcon icon={faAngleRight} />
          <Link href={`/${categoria}/${pathName}`} passHref>
            <span>{pathName.toUpperCase()}</span>
          </Link>
        </div>
        <div className={styles.containerProduto}>
          <div className={styles.produtoImagem}>
            <Image src={img} alt="testando" height={1000} width={1000} />
          </div>
          <div className={styles.produtoInfo}>
            <h1 className={styles.produtoNome}>{name}</h1>
            <div className={styles.containerPrecoComprar}>
              <div>
                <p className={styles.precoVista}>
                  {(pPrazo * 0.85).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <p className={styles.precoVistaExtra}>
                  ou 12x de{" "}
                  {(pPrazo / 12).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>

              <button className={styles.comprar} onClick={handleClick}>
                COMPRAR
              </button>
            </div>
            <div className={styles.containerParcelamento}>
              <h1>PARCELAMENTO</h1>
              <Parcelamento pPrazo={pPrazo} />
            </div>
          </div>
        </div>
        <div className={styles.produtoDescricao}>
          <div className={styles.descricaoCima}>
            <div
              className={
                desc.sobre
                  ? `${styles.descricaoTitulo} ${styles.tituloAtivo}`
                  : styles.descricaoTitulo
              }
              onClick={() => handleDesc("sobre")}
            >
              <FontAwesomeIcon icon={faScroll} />
              <h1>SOBRE</h1>
            </div>
            <div
              className={
                desc.spec
                  ? `${styles.descricaoTitulo} ${styles.tituloAtivo}`
                  : styles.descricaoTitulo
              }
              onClick={() => handleDesc("specs")}
            >
              <FontAwesomeIcon icon={faGear} />
              <h1>ESPECIFICAÇÕES</h1>
            </div>
          </div>
          {desc.sobre ? (
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet vel
              suscipit ipsam eligendi facilis earum adipisci repudiandae vitae
              soluta nesciunt? Doloremque cumque veniam asperiores dolores
              necessitatibus, maxime repudiandae delectus consectetur. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Tempora
              exercitationem quo, odit perferendis, consequuntur sunt inventore
              ullam laudantium vel error, a in accusamus fugiat quam quas
              placeat et dolorem. Adipisci! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatem possimus nesciunt modi
              totam unde vel, fugiat quisquam. Itaque eaque perspiciatis eius.
              Suscipit, consequatur a alias iste molestiae dicta consequuntur
              vitae?
            </p>
          ) : (
            <div className={styles.containerEspec}>
              {specs.map((i, key) => {
                let a = Object.entries(i);
                console.log(a[0][1]);

                return (
                  <div key={key} className={styles.especTitulo}>
                    <p>
                      <strong> {a[0][0].replace(/_/g, " ")}:</strong>
                    </p>
                    <p>{a[0][1]}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div>
          <VerMais />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
