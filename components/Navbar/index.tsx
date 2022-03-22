import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faCartShopping,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Navbar.module.scss";

function Index() {
  const [open, setOpen] = useState(false);

  function changeOpen() {
    setOpen(!open);
  }

  function changeMouseOver() {}

  return (
    <div className={styles.container}>
      <div className={styles.navInfo}>
        <div className={styles.navInfoMenu}>
          <FontAwesomeIcon icon={faBars} onClick={changeOpen} />
          <div
            className={
              open
                ? `${styles.sidebarMenu} ${styles.active}`
                : styles.sidebarMenu
            }
          >
            <FontAwesomeIcon icon={faXmark} onClick={changeOpen} />
            <ul>
              <li onMouseOver={changeMouseOver}>
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
          </div>
        </div>
        <h1>
          <Link href="/">PC Shop</Link>
        </h1>
        <div className={styles.navInfoRight}>
          <FontAwesomeIcon icon={faUser} />
          <Link href="/carrinho">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
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

export default Index;
