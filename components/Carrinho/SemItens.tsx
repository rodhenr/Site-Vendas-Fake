import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/Carrinho.module.scss";

function SemItens() {
  return (
    <>
      <h2>CARRINHO</h2>
      <div className={styles.semItemInfo}>
        <p>Nenhum produto no seu carrinho!</p>
        <FontAwesomeIcon icon={faCartPlus} />
      </div>
      <button data-cy="cart-no-items">
        <Link href={"/"}>CONTINUAR COMPRANDO</Link>
      </button>
    </>
  );
}

export default SemItens;
