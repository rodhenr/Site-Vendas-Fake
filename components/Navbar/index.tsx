import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faCartShopping,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Navbar.module.scss";

function Index() {
  const [open, setOpen] = useState(false);

  function changeOpen() {
    setOpen(!open);
  }

  return (
    <div className={styles.container}>
      <div className={styles.navInfo}>
        <div className={styles.navInfoMenu}>
          <FontAwesomeIcon icon={faBars} onClick={changeOpen} />
          {open && (
            <div className={styles.sidebarMenu}>
              <FontAwesomeIcon icon={faXmark} onClick={changeOpen} />
              <ul>
                <li>
                  <Link href="/placamae">Placa-Mãe</Link>
                </li>
                <li>
                  <Link href="/cpu">Processador</Link>
                </li>
                <li>
                  <Link href="/placadevideo">Placa de Vídeo</Link>
                </li>
                <li>
                  <Link href="/fonte">Fonte</Link>
                </li>
                <li>
                  <Link href="/gabinete">Gabinete</Link>
                </li>
                <li>
                  <Link href="/memoria">Memória RAM</Link>
                </li>
                <li>
                  <Link href="/ssd">SSD</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <h1>
          <Link href="/">PC Shop</Link>
        </h1>
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

export default Index;
