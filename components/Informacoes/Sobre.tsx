import styles from "../../styles/Informacoes.module.scss";

function Sobre() {
  return (
    <div className={styles.lojaSobre}>
      <h1>PC SHOP</h1>
      <div className={styles.lojaSobreDesc}>
        <p>
          A PC SHOP é uma empresa especializada em componentes de Alta
          Performance para seu computador. Parcelamos suas compras em 12x sem
          juros no cartão. Estamos neste mercado a 5 Anos e já vendemos mais de
          10 mil componentes. Compre pelo site e receba com total segurança.
        </p>
        <p>PC Shop © - Todos os direitos reservados.</p>
      </div>
    </div>
  );
}

export default Sobre;
