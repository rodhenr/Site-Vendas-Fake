import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Navbar.module.scss";

function index() {
  return (
    <div className={styles.container}>
      <div className={styles.navInfo}>
        <div className={styles.navInfoMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <h1>PC Shop</h1>
        <div className={styles.navInfoRight}>
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
      <input
        type="text"
        className={styles.search}
        placeholder="Digite o que você procura"
      />
    </div>
  );
}

export default index;
