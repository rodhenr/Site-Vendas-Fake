import styles from "../../styles/Carrinho.module.scss";

interface Props {
  handleCepChange: Function;
  handleCep: Function;
}

function Frete({ handleCepChange, handleCep }: Props) {
  return (
    <div className={styles.containerFrete}>
      <h3>CALCULAR FRETE</h3>
      <form className={styles.freteForm}>
        <input
          onChange={(e) => handleCepChange(e)}
          type="text"
          name="cep"
          placeholder="CEP"
          maxLength={8}
        />
        <button onClick={(e) => handleCep(e)}>Calcular</button>
      </form>
    </div>
  );
}

export default Frete;
