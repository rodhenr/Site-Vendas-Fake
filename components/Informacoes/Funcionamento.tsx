import styles from "../../styles/Informacoes.module.scss";

function Funcionamento() {
  return (
    <div className={styles.funcionanento}>
      <h1>ATENDIMENTO</h1>
      <p>
        <strong>Horário de Atendimento:</strong> Segunda à Sexta-feira de 8:00h
        às 18h{" "}
      </p>
      <p>
        <strong>Sábado Fechado:</strong> devido ao Coronavírus (COVID-19)
      </p>
      <p>
        <strong>LOJA FÍSICA</strong>
      </p>
      <p>Rua xxxxxxxxxx nº 100, Bairro xxxxxxx - São Paulo - 11111-111</p>
    </div>
  );
}

export default Funcionamento;
