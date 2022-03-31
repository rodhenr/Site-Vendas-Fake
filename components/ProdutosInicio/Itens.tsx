import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

import { addToCart } from "../../store/slices/cartSlice";
import { updateTotalPrice } from "../../store/slices/newSlice";

import styles from "../../styles/ProdutosInicio.module.scss";

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

function Itens(props: Props) {
  const dispatch = useDispatch();
  const { categoria, img, name, pathName, pPrazo, id } = props;

  function handleClick() {
    alert("Adicionado ao carrinho com sucesso!");
    dispatch(addToCart(props));
    dispatch(updateTotalPrice({ id, valorTotal: pPrazo }));
  }

  return (
    <div className={styles.containerItens}>
      <Link href={`/${categoria}/${pathName}`} passHref>
        <Image src={img} alt="processador" height={200} width={200} />
      </Link>
      <Link href={`/${categoria}/${pathName}`} passHref>
        <h1>{name}</h1>
      </Link>
      <div>
        <p className={styles.itemPrecoPrazo}>
          {pPrazo.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <p>em até 12x no cartão</p>
      </div>
      <div>
        <p className={styles.itemPrecoVista}>
          {(pPrazo * 0.85).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <p>à vista no boleto</p>
      </div>

      <button onClick={handleClick}>COMPRAR</button>
    </div>
  );
}

export default Itens;
