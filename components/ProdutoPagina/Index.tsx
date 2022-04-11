import Image from "next/image";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Link from "next/link";

import { addToCart } from "../../store/slices/cartSlice";
import Navbar from "../Navbar/Index";
import Footer from "../Footer/Index";
import Parcelamento from "./Parcelamento";

import {
  faAngleRight,
  faMoneyBill1Wave,
  faPlus,
  faMinus,
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
  specs: string[];
}

function Index(props: Props) {
  const [openTecnico, setOpenTecnico] = useState(true);
  const [openGeral, setOpenGeral] = useState(true);
  const dispatch = useDispatch();
  const { img, garantia, name, specs, pPrazo, categoria, pathName } = props;

  function handleClick() {
    alert("Adicionado ao carrinho com sucesso!");
    dispatch(addToCart(props));
  }

  function handleGeral() {
    setOpenGeral(!openGeral);
  }

  function handleTecnico() {
    setOpenTecnico(!openTecnico);
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
              <p className={styles.precoVista}>
                {(pPrazo * 0.85).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
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
        <div className={styles.produtoDescEspec}>
          <div className={styles.produtoDescricao}>
            <div
              className={
                openGeral
                  ? `${styles.produtoDescricaoTitulo} ${styles.tituloAtivo}`
                  : styles.produtoDescricaoTitulo
              }
              onClick={handleGeral}
            >
              {!openGeral ? (
                <FontAwesomeIcon icon={faPlus} />
              ) : (
                <FontAwesomeIcon icon={faMinus} />
              )}

              <h1>CARACTERÍSTICAS GERAIS</h1>
            </div>
            {!openGeral ? (
              <></>
            ) : (
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                vel suscipit ipsam eligendi facilis earum adipisci repudiandae
                vitae soluta nesciunt? Doloremque cumque veniam asperiores
                dolores necessitatibus, maxime repudiandae delectus consectetur.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora exercitationem quo, odit perferendis, consequuntur sunt
                inventore ullam laudantium vel error, a in accusamus fugiat quam
                quas placeat et dolorem. Adipisci! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Voluptatem possimus nesciunt modi
                totam unde vel, fugiat quisquam. Itaque eaque perspiciatis eius.
                Suscipit, consequatur a alias iste molestiae dicta consequuntur
                vitae?
              </p>
            )}
          </div>
          <div className={styles.produtoEspec}>
            <div
              className={
                openTecnico
                  ? `${styles.produtoDescricaoTitulo} ${styles.tituloAtivo}`
                  : styles.produtoDescricaoTitulo
              }
              onClick={handleTecnico}
            >
              {!openTecnico ? (
                <FontAwesomeIcon icon={faPlus} />
              ) : (
                <FontAwesomeIcon icon={faMinus} />
              )}
              <h1>CARACTERÍSTICAS TÉCNICAS</h1>
            </div>
            {!openTecnico ? (
              <></>
            ) : (
              specs.map((i, key) => (
                <p key={key} className={styles.EspecDescricao}>
                  - {i}
                </p>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
