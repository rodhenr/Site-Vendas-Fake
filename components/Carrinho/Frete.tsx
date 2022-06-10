import styles from "../../styles/Carrinho.module.scss";

interface Props {
  handleCepChange: Function;
  handleValidarCep: Function;
  cep: string;
}

function Frete({ handleCepChange, handleValidarCep, cep }: Props) {

  return (
    <div className={styles.containerFrete}>
      <h3>CALCULAR FRETE</h3>
      <form className={styles.freteForm}>
        <input
          onChange={(e) => handleCepChange(e)}
          type="text"
          name="cep"
          placeholder="CEP"
          pattern="[0-9]8"
          maxLength={9}
          value={cep}
          data-cy="input-cep"
        />
        <button onClick={(e) => handleValidarCep(e)} data-cy="cep-button">
          Calcular
        </button>
      </form>
    </div>
  );
}

export default Frete;
