import styles from "../../styles/Item.module.scss";

interface Props {
  pPrazo: number;
  promo: boolean;
}

function Precos({ promo, pPrazo }: Props) {
  return (
    <div className={styles.precos}>
      {promo ? (
        <div className={styles.precoPromo}>
          <p>
            {`De ${pPrazo.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}`}
          </p>
          <p>por:</p>
        </div>
      ) : (
        <></>
      )}

      <p className={styles.precoVista}>
        {promo ? (
          <>
            {`${(pPrazo * 0.7).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })} à vista`}
          </>
        ) : (
          <>
            {`${(pPrazo * 0.85).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })} à vista`}
          </>
        )}
      </p>
      <p className={styles.precoPrazo}>
        {promo ? (
          <>{`Em até 12x de ${((pPrazo * 0.85) / 12).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "BRL",
          })} no cartão`}</>
        ) : (
          <>{`Em até 12x de ${(pPrazo / 12).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "BRL",
          })} no cartão`}</>
        )}
      </p>
    </div>
  );
}

export default Precos;
