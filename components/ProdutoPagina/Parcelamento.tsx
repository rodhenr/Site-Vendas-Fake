import styles from "../../styles/ProdutoPagina.module.scss";

interface Props {
  pPrazo: number;
}

function Parcelamento({ pPrazo }: Props) {
  return (
    <div>
      <div className={styles.parcelamentoOpcoes}>
        <p>
          1X de{" "}
          <strong>
            {pPrazo.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}{" "}
          </strong>
        </p>
        <p>
          2X de{" "}
          <strong>
            {(pPrazo / 2).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}{" "}
          </strong>
          sem juros{" "}
        </p>
        <p>
          3X de{" "}
          <strong>
            {(pPrazo / 3).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}{" "}
          </strong>
          sem juros{" "}
        </p>
        <p>
          4X de{" "}
          <strong>
            {(pPrazo / 4).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}{" "}
          </strong>
          sem juros{" "}
        </p>
        <p>
          5X de{" "}
          <strong>
            {(pPrazo / 5).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}{" "}
          </strong>
          sem juros{" "}
        </p>
        <p>
          6X de{" "}
          <strong>
            {(pPrazo / 6).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}{" "}
          </strong>
          sem juros{" "}
        </p>
        <p>
          7X de{" "}
          <strong>
            {(pPrazo / 7).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}{" "}
          </strong>
          sem juros{" "}
        </p>
        <p>
          8X de{" "}
          <strong>
            {(pPrazo / 8).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}{" "}
          </strong>
          sem juros{" "}
        </p>
        <p>
          9X de{" "}
          <strong>
            {(pPrazo / 9).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}{" "}
          </strong>
          sem juros{" "}
        </p>
        <p>
          10X de{" "}
          <strong>
            {(pPrazo / 10).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}{" "}
          </strong>
          sem juros{" "}
        </p>
        <p>
          11X de{" "}
          <strong>
            {(pPrazo / 11).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}{" "}
          </strong>
          sem juros{" "}
        </p>
        <p>
          12X de{" "}
          <strong>
            {(pPrazo / 12).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}{" "}
          </strong>
          sem juros{" "}
        </p>
      </div>
    </div>
  );
}

export default Parcelamento;
