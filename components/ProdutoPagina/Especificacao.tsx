import styles from "../../styles/ProdutoPagina.module.scss";

interface Props {
  specs: Array<any>;
}

function Especificacao({ specs }: Props) {
  return (
    <div className={styles.containerEspec}>
      {specs.map((i, key) => {
        let keyValue = Object.keys(i)[0].replace(/_/g, " ");
        let values: [][] = Object.values(i);

        return (
          <div key={key} className={styles.espec}>
            <h1>{`${keyValue}:`}</h1>
            <div className={styles.especDesc}>
              {values[0].map((j, k) => {
                return <p key={k}>{j}</p>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Especificacao;
