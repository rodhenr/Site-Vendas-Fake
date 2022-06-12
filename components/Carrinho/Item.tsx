import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

import { removeFromCart } from "../../store/slices/cartSlice";
import { updateTotalPrice, deleteItem } from "../../store/slices/newSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faPlus,
  faMinus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Carrinho.module.scss";

interface Props {
  id: string;
  img: string;
  name: string;
  pPrazo: number;
  num: number;
  handleRemove: Function;
  promo: boolean;
  pathName: string;
  categoria: string;
}

function Item({ id, img, name, pPrazo, promo, pathName, categoria }: Props) {
  const dispatch = useDispatch();
  const [itemQtde, setItemQtde] = useState(1);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  useEffect(() => {
    if (promo) {
      dispatch(updateTotalPrice({ id, valorTotal: itemQtde * (pPrazo * 0.7) }));
    } else {
      dispatch(updateTotalPrice({ id, valorTotal: itemQtde * pPrazo * 0.85 }));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function aumentarQtde() {
    const newQtde = itemQtde + 1;
    setItemQtde(newQtde);
    if (promo) {
      dispatch(updateTotalPrice({ id, valorTotal: newQtde * pPrazo * 0.7 }));
    } else {
      dispatch(updateTotalPrice({ id, valorTotal: newQtde * pPrazo * 0.85 }));
    }
  }

  function diminuirQtde() {
    if (itemQtde > 1) {
      const newQtde = itemQtde - 1;
      setItemQtde(newQtde);
      if (promo) {
        dispatch(updateTotalPrice({ id, valorTotal: newQtde * pPrazo * 0.7 }));
      } else {
        dispatch(updateTotalPrice({ id, valorTotal: newQtde * pPrazo * 0.85 }));
      }
    }
  }

  function handleDelete(itemID: string) {
    if (window.confirm("Deseja excluir o item?")) {
      dispatch(removeFromCart(itemID));
      dispatch(deleteItem(itemID));
    }
  }

  return (
    <div className={styles.containerItem}>
      {width < 900 ? (
        <>
          <div className={styles.item} data-cy="cart-item">
            <div className={styles.itemImagem}>
              <Image src={img} alt="" height={1000} width={1000} />
            </div>
            <div className={styles.itemDescricao}>
              <Link href={`/${categoria}/${pathName}`} passHref>
                <p>{`${name.slice(0, 85)}...`}</p>
              </Link>
            </div>
            <div
              onClick={() => handleDelete(id)}
              className={styles.itemDeletar}
            >
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </div>
          <div className={styles.containerInfo}>
            <div className={styles.itemAcoes}>
              <button onClick={aumentarQtde} data-cy="cart-plus-qtd">
                <FontAwesomeIcon icon={faPlus} />
              </button>
              <span data-cy="cart-item-qtd">{itemQtde}</span>
              <button onClick={diminuirQtde} data-cy="cart-minus-qtd">
                <FontAwesomeIcon icon={faMinus} />
              </button>
            </div>
            <div className={styles.itemPrecos}>
              {promo ? (
                <div className={styles.containerPromo}>
                  <div className={styles.promo}>
                    <p>PROMOÇÃO</p>
                  </div>
                  <p className={styles.precoNormal}>
                    {(itemQtde * pPrazo).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <p className={styles.precoPromo} data-cy="item-price">
                    {(itemQtde * pPrazo * 0.7).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
              ) : (
                <p className={styles.precoSemPromo} data-cy="item-price">
                  {(itemQtde * pPrazo * 0.85).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className={styles.item} data-cy="cart-item">
          <div className={styles.itemImagem}>
            <Image src={img} alt="" height={1000} width={1000} />
          </div>
          <div className={styles.itemDescricao}>
            <Link href={`/${categoria}/${pathName}`} passHref>
              <p>{`${name.slice(0, 85)}...`}</p>
            </Link>
          </div>
          <div className={styles.itemAcoes}>
            <button onClick={aumentarQtde} data-cy="cart-plus-qtd">
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <span data-cy="cart-item-qtd">{itemQtde}</span>
            <button onClick={diminuirQtde} data-cy="cart-minus-qtd">
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </div>

          {promo ? (
            <>
              <div className={styles.promo}>
                <p>PROMOÇÃO</p>
              </div>
              <div className={styles.itemPrecos}>
                <div className={styles.containerPromo}>
                  <p className={styles.precoNormal}>
                    {(itemQtde * pPrazo).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <p className={styles.precoPromo} data-cy="item-price">
                    {(itemQtde * pPrazo * 0.7).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div></div>
              <div className={styles.itemPrecos}>
                <p className={styles.precoSemPromo} data-cy="item-price">
                  {(itemQtde * pPrazo * 0.85).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
            </>
          )}

          <div
            onClick={() => handleDelete(id)}
            className={styles.itemDeletar}
            data-cy="delete-item"
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Item;
