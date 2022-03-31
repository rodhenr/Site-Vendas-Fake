import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { RootState } from "../../store/Store";
import { cleanCart } from "../../store/slices/cartSlice";
import { cleanSlice } from "../../store/slices/newSlice";
import Item from "./Item";

import styles from "../../styles/Carrinho.module.scss";

function Index() {
  const cartStore = useSelector((state: RootState) => state.cartStore.cart);
  const totalPrice = useSelector((state: RootState) => state.newSlice.obj);
  const dispatch = useDispatch();
  const [totalProdutos, setTotalProdutos] = useState(0);
  const [testCep, setTestCep] = useState(false);
  const [valorCep, setValorCep] = useState(0);

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

  function handleCepChange(e: React.ChangeEvent<HTMLInputElement>) {
    let cep = e.target.value;
    if (cep.toString().length === 8) {
      setTestCep(true);
    } else {
      setTestCep(false);
    }
  }

  function handleCep(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    if (testCep) {
      setValorCep(50);
    } else {
      setValorCep(0);
    }
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.carrinhoTitulo}>CARRINHO</h2>
      <hr />
      {cartStore.length === 0 ? (
        <div className={styles.carrinhoSemProdutos}>
          <p>Nenhum produto no seu carrinho.</p>
          <button>CONTINUAR COMPRANDO</button>
        </div>
      ) : (
        <>
          <div className={styles.carrinhoFrete}>
            <h3>CALCULAR FRETE</h3>
            <form className={styles.carrinhoFreteForm}>
              <input
                onChange={(e) => handleCepChange(e)}
                type="text"
                name="cep"
                placeholder="CEP"
                maxLength={8}
              />
              <button onClick={(e) => handleCep(e)}>Calcular</button>
            </form>
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
              handleRemove={handleRemove}
            />
          ))}
          <div className={styles.carrinhoLimpar}>
            <button onClick={handleRemove}>
              <FontAwesomeIcon icon={faCartShopping} /> LIMPAR CARRINHO
            </button>
          </div>

          <div className={styles.carrinhoPrecos}>
            <h3>Resumo</h3>
            <hr />
            <div className={styles.carrinhoPrecosProdutos}>
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
            <div className={styles.carrinhoPrecosFrete}>
              <p>{"FRETE"}</p>
              <p>
                {valorCep.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
            <div className={styles.carrinhoPrecosTotal}>
              <p>{"VALOR TOTAL"}</p>
              <p>
                {(totalProdutos + valorCep).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
            <hr />
            <div className={styles.carrinhoPrecoFinal}>
              <div className={styles.carrinhoPrecoFinalVista}>
                <p>
                  {((totalProdutos + valorCep) * 0.85).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <p>{"no boleto com 15% desconto"}</p>
              </div>
              <div className={styles.carrinhoPrecoFinalPrazo}>
                <p>
                  {(totalProdutos + valorCep).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <p>{"em 12x sem juros no cartão"}</p>
              </div>
            </div>
          </div>

          <div className={styles.carrinhoFinalizar}>
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
