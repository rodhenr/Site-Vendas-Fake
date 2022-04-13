import styles from "../../styles/ProdutoPagina.module.scss";

interface Props {
  specs: object[];
}

function Especificacao({ specs }: Props) {
  return (
    <div className={styles.containerEspec}>
      {specs.map((i, key) => {
        let a = Object.entries(i);
        console.log(a[0][1]);

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
