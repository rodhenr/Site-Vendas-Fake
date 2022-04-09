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
  specs: string[];
}

function Item(props: Props) {
  const dispatch = useDispatch();
  const { categoria, img, name, pathName, pPrazo, id } = props;

  function handleClick() {
    alert("Adicionado ao carrinho com sucesso!");
    dispatch(addToCart(props));
    dispatch(updateTotalPrice({ id, valorTotal: pPrazo }));
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

      <p className={styles.itemPrecoVista}>
        {`${(pPrazo * 0.85).toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          style: "currency",
          currency: "BRL",
        })} à vista no boleto`}
      </p>
      <p className={styles.itemPrecoPrazo}>
        {`12x de ${(pPrazo / 12).toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          style: "currency",
          currency: "BRL",
        })} no cartão`}
      </p>

      <button onClick={handleClick}>COMPRAR</button>
    </div>
  );
}

export default Item;
