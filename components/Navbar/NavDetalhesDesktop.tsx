import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarcode,
  faCircleCheck,
  faCreditCard,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/Navbar.module.scss";

function NavDetalhesDesktop() {
  return (
    <div>
      <div className={styles.containerDetalhes}>
        <div className={styles.detalhesItem}>
          <FontAwesomeIcon icon={faTruck} />
          <div>
            <h1>RECEBA SEU PEDIDO</h1>
            <p>No conforto da sua casa</p>
          </div>
        </div>
        <div className={styles.detalhesItem}>
          <FontAwesomeIcon icon={faCreditCard} />
          <div>
            <h1>PARCELE SEU PEDIDO</h1>
            <p>Em até 12x</p>
          </div>
        </div>
        <div className={styles.detalhesItem}>
          <FontAwesomeIcon icon={faBarcode} />
          <div>
            <h1>GANHE DESCONTO NO</h1>
            <p>Boleto/PIX</p>
          </div>
        </div>
        <div className={styles.detalhesItem}>
          <FontAwesomeIcon icon={faCircleCheck} />
          <div>
            <h1>AS MELHORES OFERTAS</h1>
            <p>Venha conferir!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavDetalhesDesktop;
