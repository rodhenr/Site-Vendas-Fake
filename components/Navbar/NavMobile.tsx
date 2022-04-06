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

function NavMobile() {
  const [open, setOpen] = useState(false);

  function changeOpen() {
    setOpen(!open);
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerCima}>
        <div className={styles.containerNavbar}>
          <div className={styles.navbarCategorias} onClick={changeOpen}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div
            className={
              open ? `${styles.navbar} ${styles.active}` : styles.navbar
            }
          >
            <FontAwesomeIcon icon={faXmark} onClick={changeOpen} />

            <nav>
              <ul onClick={changeOpen}>
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
        </div>
        <h1 className={styles.nomeLoja}>
          <Link href="/">PC Shop</Link>
        </h1>
        <div className={styles.loginCarrinho}>
          <FontAwesomeIcon icon={faUser} />
          <Link href="/carrinho" passHref>
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </div>
      </div>
      <input
        type="text"
        className={styles.busca}
        placeholder="Digite o que você procura"
      />
    </div>
  );
}

export default NavMobile;
