import { useSelector } from "react-redux";

import { RootState } from "../../store/Store";

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
      >
        {cartStore.length === 0 ? <SemItens /> : <ComItens />}
      </div>
    </div>
  );
}

export default Index;
