import Image from "next/image";
import { removeFromCart, cleanCart } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";
import styles from "../../styles/Carrinho.module.scss";

interface Props {
  id: string,
  img: string,
  name: string,
  pPrazo: number,
}

function Item({id, img, name, pPrazo}: Props) {
  const dispatch = useDispatch();
  
  return (
    <div>
      <div className={styles.produto}>
        <div>
          <Image src={img} alt="" height={100} width={100} />
          <div>
            <p>{name}</p>
            <p>{`${pPrazo.toFixed(2).replace(".", ",")} à vista no boleto`}</p>
            <p>{`${pPrazo.toFixed(2).replace(".", ",")} em até 12x`}</p>
          </div>
          <div>
            <button>+</button>
            <button>-</button>w
            <button onClick={() => dispatch(removeFromCart(id))}>REMOVE</button>
            <button onClick={() => dispatch(cleanCart())}>CLEAN</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
