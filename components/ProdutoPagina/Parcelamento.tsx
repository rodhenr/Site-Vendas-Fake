import styles from "../../styles/ProdutoPagina.module.scss";

interface Props {
  pPrazo: number;
}

function Parcelamento({ pPrazo }: Props) {
  return (
    <div>
      <div className={styles.parcelamento}>
        <p>
          1x de{" "}
          <span>
            {pPrazo.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}{" "}
          </span>
        </p>
        <p>
          2x de{" "}
          <span>
            {(pPrazo / 2).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}{" "}
          </span>
          sem juros{" "}
        </p>
        <p>
          3x de{" "}
          <span>
            {(pPrazo / 3).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}{" "}
          </span>
          sem juros{" "}
        </p>
        <p>
          4x de{" "}
          <span>
            {(pPrazo / 4).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}{" "}
          </span>
          sem juros{" "}
        </p>
        <p>
          5x de{" "}
          <span>
            {(pPrazo / 5).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}{" "}
          </span>
          sem juros{" "}
        </p>
        <p>
          6x de{" "}
          <span>
            {(pPrazo / 6).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}{" "}
          </span>
          sem juros{" "}
        </p>
        <p>
          7x de{" "}
          <span>
            {(pPrazo / 7).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}{" "}
          </span>
          sem juros{" "}
        </p>
        <p>
          8x de{" "}
          <span>
            {(pPrazo / 8).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}{" "}
          </span>
          sem juros{" "}
        </p>
        <p>
          9x de{" "}
          <span>
            {(pPrazo / 9).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}{" "}
          </span>
          sem juros{" "}
        </p>
        <p>
          10x de{" "}
          <span>
            {(pPrazo / 10).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}{" "}
          </span>
          sem juros{" "}
        </p>
        <p>
          11x de{" "}
          <span>
            {(pPrazo / 11).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}{" "}
          </span>
          sem juros{" "}
        </p>
        <p>
          12x de{" "}
          <span>
            {(pPrazo / 12).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}{" "}
          </span>
          sem juros{" "}
        </p>
      </div>
    </div>
  );
}

export default Parcelamento;
