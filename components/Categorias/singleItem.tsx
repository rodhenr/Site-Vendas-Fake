import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

import { addToCart } from "../../store/slices/cartSlice";

import styles from "../../styles/Categorias.module.scss";

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

function SingleItem(props: Props) {
  const dispatch = useDispatch();
  const { categoria, img, name, pathName, pPrazo } = props;

  function handleClick() {
    alert("Adicionado ao carrinho com sucesso!");
    dispatch(addToCart(props));
  }

  return (
    <div className={styles.itemContainer}>
      <Link href={`${categoria}/${pathName}`} passHref>
        <Image src={img} alt="processador" height={140} width={140} />
      </Link>
      <hr />
      <Link href={`${categoria}/${pathName}`} passHref>
        <h1 className={styles.itemNome}>{name}</h1>
      </Link>

      <div className={styles.itemPrecoVista}>
        <p>
          {`${pPrazo.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "BRL",
          })} à vista`}
        </p>
      </div>

      <div className={styles.itemPrecoPrazo}>
        <p>
          {`Em até 12x de 
          ${(pPrazo / 12).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "BRL",
          })}`}
        </p>
      </div>

      <button onClick={handleClick}>COMPRAR</button>
    </div>
  );
}

export default SingleItem;
