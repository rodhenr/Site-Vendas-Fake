import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "../../store/slices/cartSlice";

import Parcelamento from "./Parcelamento";

import img2 from "../../public/images/fonte-xpg-850-2.jpg";
import img3 from "../../public/images/fonte-xpg-850-3.jpg";

import {
  faAngleRight,
  faCreditCard,
  faMoneyBill1Wave,
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
  promo: boolean;
}

function Produto(props: Props) {
  const dispatch = useDispatch();
  const { img, name, pPrazo, categoria, pathName } = props;
  const [state, setState] = useState(1);

  function imgAtual() {
    if (state === 2) {
      return img2;
    } else if (state === 3) {
      return img3;
    } else {
      return img;
    }
  }

  function handleImageChange(num: number) {
    setState(num);
  }

  function handleClick() {
    alert("Adicionado ao carrinho com sucesso!");
    dispatch(addToCart(props));
  }

  return (
    <div className={styles.containerCaminhoProduto}>
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
        <div className={styles.containerProdutoImagem}>
          <div className={styles.produtoImagem}>
            <div className={styles.containerImagemAdicional}>
              <div
                className={styles.imagemAdicional}
                onClick={() => handleImageChange(1)}
              >
                <Image
                  src={img}
                  alt="testando"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <div
                className={styles.imagemAdicional}
                onClick={() => handleImageChange(2)}
              >
                <Image
                  src={img2}
                  alt="testando"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <div
                className={styles.imagemAdicional}
                onClick={() => handleImageChange(3)}
              >
                <Image
                  src={img3}
                  alt="testando"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            </div>
            <div className={styles.imagemPrincipal}>
              <Image
                src={imgAtual()}
                alt="testando"
                height={1000}
                width={1000}
              />
            </div>
          </div>
        </div>
        <div className={styles.produtoInfo}>
          <h1 className={styles.produtoNome}>{name}</h1>

          <div className={styles.produtoPreco}>
            <div className={styles.produtoVista}>
              <FontAwesomeIcon icon={faMoneyBill1Wave} />
              <div className={styles.precoVista}>
                <p>
                  {(pPrazo * 0.85).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <p>à vista com 15% de desconto no boleto</p>
              </div>
            </div>

            <div className={styles.produtoPrazo}>
              <FontAwesomeIcon icon={faCreditCard} />
              <div className={styles.precoPrazo}>
                <p>
                  {pPrazo.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <p>
                  em 12x de{" "}
                  {(pPrazo / 12).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
            </div>
          </div>

          <div className={styles.containerParcelamento}>
            <h1>PARCELAMENTO</h1>
            <Parcelamento pPrazo={pPrazo} />
          </div>
          <div className={styles.comprar}>
            <button onClick={handleClick}>COMPRAR</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Produto;
