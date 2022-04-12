import Pagamento from "./Pagamento";
import Funcionamento from "./Funcionamento";
import InfoExtra from "./InfoExtra";
import Sobre from "./Sobre";

import styles from "../../styles/Informacoes.module.scss";

function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.containerLoja}>
        <Funcionamento />
        <Pagamento />
        <InfoExtra />
      </div>
      <Sobre />
    </div>
  );
}

export default Index;
