import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

import { addToCart } from "../../store/slices/cartSlice";

import Parcelamento from "./Parcelamento";

import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
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
    promo: boolean;
}

function Produto(props: Props) {
  const dispatch = useDispatch();
  const { img, name, pPrazo, categoria, pathName } = props;

  function handleClick() {
    alert("Adicionado ao carrinho com sucesso!");
    dispatch(addToCart(props));
  }

  return (
    <div>
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
    </div>
  );
}

export default Produto;
