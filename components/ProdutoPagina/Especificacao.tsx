import styles from "../../styles/ProdutoPagina.module.scss";

interface Props {
  specs: Array<any>;
}

function Especificacao({ specs }: Props) {
  return (
    <div className={styles.containerEspec}>
      {specs.map((i, key) => {
        let a = Object.entries(i);

        return (
          <div key={key} className={styles.especDesc}>
            <p>
              <strong> {a[0][0].replace(/_/g, " ")}:</strong>
            </p>
            <p>{a[0][1]}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Especificacao;
