import { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";

import { removeFromCart } from "../../store/slices/cartSlice";
import { updateTotalPrice, deleteItem } from "../../store/slices/newSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Carrinho.module.scss";

interface Props {
  id: string;
  img: string;
  name: string;
  pPrazo: number;
  num: number;
  handleRemove: Function;
}

function Item({ id, img, name, pPrazo, num }: Props) {
  const dispatch = useDispatch();
  const [itemQtde, setItemQtde] = useState(1);

  useEffect(() => {
    dispatch(updateTotalPrice({ id, valorTotal: itemQtde * pPrazo }));
  }, []);

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
      dispatch(deleteItem(itemID));
    }
  }

  return (
    <div className={styles.containerItem}>
      <p className={styles.itemNumero}>Produto {num + 1}</p>
      <div className={styles.item}>
        <div className={styles.itemImagem}>
          <Image src={img} alt="" height={100} width={100} />
        </div>
        <div className={styles.itemDescricao}>
          <p>{name}</p>
          <div className={styles.itemPrecos}>
            <p>
              {`${(itemQtde * pPrazo * 0.85).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL",
              })} à vista`}
            </p>
            <p>
              {`${(itemQtde * pPrazo).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL",
              })} em até 12x no cartão`}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.itemAdicionarRemover}>
        <button onClick={aumentarQtde}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <div className={styles.itemQuantidade}>
          <span>{itemQtde}</span>
        </div>
        <button onClick={diminuirQtde}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <button
          className={styles.itemRemover}
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
