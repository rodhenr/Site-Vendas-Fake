import styles from "../../styles/Carrinho.module.scss";

interface Props {
  valorCep: number;
  totalProdutos: number;
}

function PrecoFinal({ valorCep, totalProdutos }: Props) {
  return (
    <div className={styles.containerPrecosFinal}>
      <div className={styles.precosProdutos}>
        <p>Subtotal</p>
        <p data-cy="products-price">
          {totalProdutos.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <div className={styles.precoFrete}>
        <p>Frete</p>
        <p>
          {valorCep.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <div className={styles.precoTotal}>
        <p>TOTAL</p>
        <p>
          {(totalProdutos + valorCep).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
    </div>
  );
}

export default PrecoFinal;
