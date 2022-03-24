import Image from "next/image";
import { removeFromCart } from "../../store/slices/cartSlice";
import { updateTotalPrice } from "../../store/slices/newSlice";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Carrinho.module.scss";
import { useState } from "react";

interface Props {
  id: string;
  img: string;
  name: string;
  pPrazo: number;
  num: number;
}

function Item({ id, img, name, pPrazo, num }: Props) {
  const dispatch = useDispatch();
  const [itemQtde, setItemQtde] = useState(1);

  function aumentarQtde() {
    const newQtde = itemQtde + 1;
    setItemQtde(newQtde);
    dispatch(updateTotalPrice({ id, valorTotal: newQtde * pPrazo }));
  }

  function diminuirQtde() {
    if (itemQtde > 1) {
      const newQtde = itemQtde - 1;
      setItemQtde(newQtde);
      dispatch(updateTotalPrice({ id, valorTotal: newQtde * pPrazo }));
    }
  }

  function handleDelete(itemID: string): void {
    if (window.confirm("Deseja excluir o item?")) {
      dispatch(removeFromCart(itemID));
    }
  }

  return (
    <div className={styles.containerCartItem}>
      <p className={styles.cartItemNumber}>Produto {num + 1}</p>
      <div className={styles.cartItemMain}>
        <div className={styles.cartItemImage}>
          <Image src={img} alt="" height={100} width={100} />
        </div>
        <div className={styles.cartItemDesc}>
          <p>{name}</p>
          <div className={styles.cartItemPrices}>
            <p className={styles.cartItemPriceVista}>
              {`${(itemQtde * pPrazo * 0.85).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL",
              })} à vista`}
            </p>
            <p className={styles.cartItemPricePrazo}>
              {`${(itemQtde * pPrazo).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL",
              })} em até 12x no cartão`}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.cartItemAddRemove}>
        <button onClick={aumentarQtde}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <div className={styles.cartItemQt}>
          <span>{itemQtde}</span>
        </div>
        <button onClick={diminuirQtde}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <button
          className={styles.cartItemRemove}
          onClick={() => handleDelete(id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      <hr />
    </div>
  );
}

export default Item;
