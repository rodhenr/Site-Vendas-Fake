import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

import { addToCart } from "../../store/slices/cartSlice";
import { updateTotalPrice } from "../../store/slices/newSlice";

import styles from "../../styles/Item.module.scss";

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

function Item(props: Props) {
  const dispatch = useDispatch();
  const { categoria, img, name, pathName, pPrazo, id, promo } = props;

  function handleClick() {
    alert("Adicionado ao carrinho com sucesso!");

    if (promo === true) {
      dispatch(addToCart(props));
      dispatch(updateTotalPrice({ id, valorTotal: 1111 }));
    } else {
      dispatch(addToCart(props));
      dispatch(updateTotalPrice({ id, valorTotal: 2222 }));
    }
  }

  return (
    <div className={styles.containerItem}>
      <Link href={`/${categoria}/${pathName}`} passHref>
        <Image src={img} alt="processador" height={200} width={200} />
      </Link>
      <hr />
      <Link href={`/${categoria}/${pathName}`} passHref>
        <h2>{name}</h2>
      </Link>
      {promo ? (
        <div className={styles.itemPrecoPromo}>
          <p>
            {`De ${pPrazo.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}`}
          </p>
          <p>por:</p>
        </div>
      ) : (
        <></>
      )}

      <p className={styles.itemPrecoVista}>
        {promo ? (
          <>
            {" "}
            {`${(pPrazo * 0.7).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })} à vista`}
          </>
        ) : (
          <>
            {" "}
            {`${(pPrazo * 0.85).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })} à vista`}
          </>
        )}
      </p>
      <p className={styles.itemPrecoPrazo}>
        {promo ? (
          <>{`Em até 12x de ${((pPrazo * 0.85) / 12).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "BRL",
          })} no cartão`}</>
        ) : (
          <>{`Em até 12x de ${(pPrazo / 12).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "BRL",
          })} no cartão`}</>
        )}
      </p>

      <button onClick={handleClick}>COMPRAR</button>
    </div>
  );
}

export default Item;
