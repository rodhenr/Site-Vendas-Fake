import Item from "./Item";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { cleanCart } from "../../store/slices/cartSlice";
import { cleanSlice } from "../../store/slices/newSlice";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import styles from "../../styles/Carrinho.module.scss";

function Index() {
  const cartStore = useSelector((state: RootState) => state.cartStore.cart);
  const totalPrice = useSelector((state: RootState) => state.newSlice.obj);
  const dispatch = useDispatch();
  const [totalProdutos, setTotalProdutos] = useState(0);

  useEffect(() => {
    if (cartStore.length === 0) {
      setTotalProdutos(0);
    } else {
      const reducedPrices = totalPrice
        .map((i) => {
          return i.valorTotal;
        })
        .reduce((a, b) => {
          return a + b;
        });
      setTotalProdutos(reducedPrices);
    }
  }, [totalPrice]);

  function handleRemove() {
    dispatch(cleanCart());
    dispatch(cleanSlice());
  }

  const cep = 50;

  return (
    <div className={styles.containerCart}>
      <h2 className={styles.cartTitle}>CARRINHO</h2>
      <hr />
      {cartStore.length === 0 ? (
        <div className={styles.cartNoProducts}>
          <p>Nenhum produto no seu carrinho.</p>
          <button>CONTINUAR COMPRANDO</button>
        </div>
      ) : (
        <>
          <div className={styles.containerCartShip}>
            <h3>CALCULAR FRETE</h3>
            <div className={styles.cartShipMain}>
              <input type="text" placeholder="CEP" />
              <button>Calcular</button>
            </div>
          </div>
          <hr />
          {cartStore.map((i, key) => (
            <Item
              key={key}
              img={i.img}
              id={i.id}
              pPrazo={i.pPrazo}
              name={i.name}
              num={key}
            />
          ))}
          <div className={styles.cartRemoveAll}>
            <button onClick={handleRemove}>
              <FontAwesomeIcon icon={faCartShopping} /> LIMPAR CARRINHO
            </button>
          </div>

          <div className={styles.prices}>
            <h3>Resumo</h3>
            <hr />
            <div className={styles.cartProductTotal}>
              <p>{"TOTAL DOS PRODUTOS"}</p>
              <p>
                {totalProdutos.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
            <hr />
            <div className={styles.cartPricesShip}>
              <p>{"FRETE"}</p>
              <p>
                {cep.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
            <div className={styles.cartPricesTotal}>
              <p>{"VALOR TOTAL"}</p>
              <p>
                {(totalProdutos + cep).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
            <hr />
            <div className={styles.cartTotal}>
              <div className={styles.cartTotalVista}>
                <p className={styles.cartTotalVistaPrice}>
                  {((totalProdutos + cep) * 0.85).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <p>{"no boleto com 15% desconto"}</p>
              </div>
              <div className={styles.cartTotalPrazo}>
                <p className={styles.cartTotalPrazoPrice}>
                  {(totalProdutos + cep).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <p>{"em 12x sem juros no cartão"}</p>
              </div>
            </div>
          </div>

          <div className={styles.cartCheckout}>
            <button>
              <p>
                <FontAwesomeIcon icon={faCartShopping} />
                FINALIZAR COMPRAR
              </p>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Index;
