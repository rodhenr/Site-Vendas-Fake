import styles from "../../styles/Item.module.scss";

interface Props {
  pPrazo: number;
  promo: boolean;
}

function Precos({ promo, pPrazo }: Props) {
  return (
    <div className={styles.containerPreco}>
      <div className={styles.produtoPrecos}>
        <div className={styles.precoPrazo}>
          {promo ? (
            <p data-cy="category-item-price">
              {(pPrazo * 0.85).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL",
              })}
            </p>
          ) : (
            <p data-cy="category-item-price">
              {pPrazo.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL",
              })}
            </p>
          )}
        </div>
      </div>
      <div className={styles.precoDetalhe}>
        {promo ? (
          <p>
            <strong>
              {(pPrazo * 0.7).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL",
              })}{" "}
            </strong>
            à vista no boleto ou em até{" "}
            <strong>
              12x de{" "}
              {((pPrazo * 0.85) / 12).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL",
              })}{" "}
            </strong>
            sem juros
          </p>
        ) : (
          <p>
            <strong>
              {(pPrazo * 0.85).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL",
              })}{" "}
            </strong>
            à vista no boleto ou em até{" "}
            <strong>
              12x de{" "}
              {(pPrazo / 12).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL",
              })}{" "}
            </strong>
            sem juros
          </p>
        )}
      </div>
    </div>
  );
}

export default Precos;
