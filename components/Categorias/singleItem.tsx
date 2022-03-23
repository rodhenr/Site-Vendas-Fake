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
    <div className={styles.item}>
      <Link href={`${categoria}/${pathName}`} passHref>
        <Image src={img} alt="processador" height={140} width={140} />
      </Link>
      <Link href={`${categoria}/${pathName}`} passHref>
        <h1 className={styles.nameItem}>{name}</h1>
      </Link>
      <hr />
      <p className={styles.pPrazo}>
        {pPrazo.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <p className={styles.pPrazoDesc}>em até 12x no cartão</p>
      <p className={styles.pVista}>
        {(pPrazo * 0.85).toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <p className={styles.pVistaDesc}>à vista no boleto</p>
      <button onClick={handleClick}>COMPRAR</button>
    </div>
  );
}

export default SingleItem;
