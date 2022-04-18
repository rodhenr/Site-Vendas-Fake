import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartPlus, faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { RootState } from "../../store/Store";
import { cleanCart } from "../../store/slices/cartSlice";
import { cleanSlice } from "../../store/slices/newSlice";

import Item from "./Item";
import PrecoFinal from "./PrecoFinal";
import Frete from "./Frete";

import styles from "../../styles/Carrinho.module.scss";

function Index() {
  const cartStore = useSelector((state: RootState) => state.cartStore.cart);
  const totalPrice = useSelector((state: RootState) => state.newSlice.obj);
  const dispatch = useDispatch();
  const [totalProdutos, setTotalProdutos] = useState(0);
  const [cep, setCep] = useState("");
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
  }, [totalPrice, cartStore.length]);

  function handleRemove() {
    if (window.confirm("Deseja limpar o carrinho?")) {
      dispatch(cleanCart());
      dispatch(cleanSlice());
    }
  }

  function handleCepChange(e: React.ChangeEvent<HTMLInputElement>) {
    let novoValor = e.target.value.replace(/\D/g, "");

    if (novoValor.length > 5) {
      let novoCep = `${novoValor.slice(0, 5)}-${novoValor.slice(5)}`;
      setCep(novoCep);
    } else {
      setCep(novoValor);
    }
  }

  function handleValidarCep(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    if (cep.length === 9) {
      setValorCep(50);
    } else {
      alert("CEP INVÁLIDO!");
    }
  }

  return (
    <div className={styles.geral}>
      <div
        className={
          cartStore.length === 0 ? styles.containerSemItem : styles.container
        }
      >
        {cartStore.length === 0 ? (
          <div className={styles.carrinhoSemProdutos}>
            <h2>CARRINHO</h2>
            <div className={styles.semProdutosInfo}>
              <p>Nenhum produto no seu carrinho!</p>
              <FontAwesomeIcon icon={faCartPlus} />
            </div>
            <button>
              <Link href={"/"}>CONTINUAR COMPRANDO</Link>
            </button>
          </div>
        ) : (
          <>
            <div className={styles.titulo}>
              <h2>CARRINHO</h2>
            </div>
            <div className={styles.containerTeste}>
              {cartStore.map((i, key) => (
                <Item
                  key={key}
                  img={i.img}
                  id={i.id}
                  pPrazo={i.pPrazo}
                  name={i.name}
                  num={key}
                  handleRemove={handleRemove}
                  promo={i.promo}
                  pathName={i.pathName}
                  categoria={i.categoria}
                />
              ))}
            </div>
            <div className={styles.carrinhoLimpar}>
              <button onClick={handleRemove}>LIMPAR CARRINHO</button>
            </div>
            <Frete
              handleCepChange={handleCepChange}
              handleValidarCep={handleValidarCep}
              cep={cep}
            />
            <div className={styles.precoFinalizar}>
              <PrecoFinal valorCep={valorCep} totalProdutos={totalProdutos} />
              <div className={styles.finalizarCompra}>
                <button disabled={valorCep === 0}>
                  {valorCep === 0 ? (
                    <p>
                      <FontAwesomeIcon icon={faCartShopping} />
                      FINALIZAR COMPRAR
                    </p>
                  ) : (
                    <Link href={"/"} passHref>
                      <p>
                        <FontAwesomeIcon icon={faCartShopping} />
                        FINALIZAR COMPRAR
                      </p>
                    </Link>
                  )}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Index;
