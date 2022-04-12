import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

import Preco from "./Precos";
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

    if (promo) {
      dispatch(addToCart(props));
      dispatch(updateTotalPrice({ id, valorTotal: pPrazo * 0.7 }));
    } else {
      dispatch(addToCart(props));
      dispatch(updateTotalPrice({ id, valorTotal: pPrazo * 0.85 }));
    }
  }

  return (
    <div className={styles.container}>
      <Link href={`/${categoria}/${pathName}`} passHref>
        <Image src={img} alt="processador" height={200} width={200} />
      </Link>
      <hr />
      <Link href={`/${categoria}/${pathName}`} passHref>
        <h2>{name}</h2>
      </Link>
      <Preco pPrazo={pPrazo} promo={promo} />

      <button onClick={handleClick}>COMPRAR</button>
    </div>
  );
}

export default Item;
