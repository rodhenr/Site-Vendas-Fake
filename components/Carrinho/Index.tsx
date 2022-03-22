import Item from "./Item";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import styles from "../../styles/Carrinho.module.scss";

function Index() {
  const cartStore = useSelector((state: RootState) => state.cartStore.cart);

  return (
    <div className={styles.container}>
      {console.log(cartStore)}
      <h1>MEU CARRINHO</h1>
      <div className={styles.frete}>
        <h2>CALCULAR FRETE</h2>
        <div>
          <input type="text" placeholder="CEP" />
          <button>Calcular</button>
        </div>
      </div>
      {cartStore.length === 0 ? (
        <p>Nenhum produto no seu carrinho.</p>
      ) : (
        cartStore.map((i, key) => (
          <Item
            key={key}
            img={i.img}
            id={i.id}
            pPrazo={i.pPrazo}
            name={i.name}
          />
        ))
      )}
      <div>
        {"TOTAL DOS PRODUTOS:"}
        {"R$ 1000,00"}
        {"FRETE:"}
        {"R$ 500,00"}
        {"VALOR TOTAL:"}
        {"R$ 1500,00"}
      </div>

      <div>{"FINALIZAR COMPRA"}</div>
    </div>
  );
}

export default Index;
