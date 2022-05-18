import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/Navbar.module.scss";

interface Props {
  open: boolean;
  changeOpen: Function;
}

function Navbar({ open, changeOpen }: Props) {
  return (
    <div className={open ? `${styles.navbar} ${styles.active}` : styles.navbar}>
      <div className={styles.navAtivoOpcoes}>
        <FontAwesomeIcon icon={faXmark} onClick={() => changeOpen()} />
        <div className={styles.navAtivoExtra}>
          <FontAwesomeIcon icon={faUser} />
          <Link href="/carrinho" passHref>
            <span>
              <FontAwesomeIcon icon={faCartShopping} />
            </span>
          </Link>
        </div>
      </div>

      <nav>
        <ul onClick={() => changeOpen()}>
          <li>
            <Link href="/placa-mae">Placa-Mãe</Link>
          </li>
          <li>
            <Link href="/processador">Processador</Link>
          </li>
          <li>
            <Link href="/placa-de-video">Placa de Vídeo</Link>
          </li>
          <li>
            <Link href="/fonte">Fonte</Link>
          </li>
          <li>
            <Link href="/gabinete">Gabinete</Link>
          </li>
          <li>
            <Link href="/memoria-ram">Memória RAM</Link>
          </li>
          <li>
            <Link href="/ssd">SSD</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
