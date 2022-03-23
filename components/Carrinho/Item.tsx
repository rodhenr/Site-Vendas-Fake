import Image from "next/image";
import { removeFromCart } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Carrinho.module.scss";

interface Props {
  id: string;
  img: string;
  name: string;
  pPrazo: number;
  num: number;
}

function Item({ id, img, name, pPrazo, num }: Props) {
  const dispatch = useDispatch();

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
              {(pPrazo * 0.85).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL",
              })}{" "}
              à vista
            </p>
            <p className={styles.cartItemPricePrazo}>
              {pPrazo.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL",
              })}{" "}
              em até 12x no cartão
            </p>
          </div>
        </div>
      </div>
      <div className={styles.cartItemAddRemove}>
        <button>
          <p>+</p>
        </button>
        <input value="1" />
        <button>
          <p>-</p>
        </button>
        <button onClick={() => dispatch(removeFromCart(id))}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      <hr />
    </div>
  );
}

export default Item;
