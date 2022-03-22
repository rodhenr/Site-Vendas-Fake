import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

import { addToCart } from "../../store/slices/cartSlice";
import styles from "../../styles/HomeProducts.module.scss";

interface Props {
  array: object;
  category: string;
  img: string;
  name: string;
  pathName: string;
  pPrazo: number;
}

function HomeItems({ array, category, img, name, pathName, pPrazo }: Props) {
  const dispatch = useDispatch();
  return (
    <div className={styles.itemsContainer}>
      <Image src={img} alt="processador" height={200} width={200} />
      <h1>
        <Link href={`/${category}/${pathName}`}>{name}</Link>
      </h1>
      <p className={styles.pPrazo}>R$ {pPrazo.toFixed(2).replace(".", ",")}</p>
      <p className={styles.pPrazoDesc}>em até 12x no cartão</p>
      <p className={styles.pVista}>
        R$ {(pPrazo * 0.85).toFixed(2).replace(".", ",")}
      </p>
      <p className={styles.pVistaDesc}>à vista no boleto</p>
      <button onClick={() => dispatch(addToCart(array))}>COMPRAR</button>
    </div>
  );
}

export default HomeItems;
