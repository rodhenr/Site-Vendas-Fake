import { useSelector } from "react-redux";

import { RootState } from "../../store/store";

import ComItens from "./ComItens";
import SemItens from "./SemItens";

import styles from "../../styles/Carrinho.module.scss";

function Index() {
  const cartStore = useSelector((state: RootState) => state.cartStore.cart);

  return (
    <div className={styles.geral}>
      <div
        className={
          cartStore.length === 0 ? styles.semItem : styles.comItem
        }
        data-cy="cart-main"
      >
        {cartStore.length === 0 ? <SemItens /> : <ComItens />}
      </div>
    </div>
  );
}

export default Index;
