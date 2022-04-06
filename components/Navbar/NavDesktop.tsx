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

function NavDesktop() {
  const [open, setOpen] = useState(false);

  function changeOpen() {
    setOpen(!open);
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerLogin}>
        <FontAwesomeIcon icon={faUser} />
        <p>Minha Conta</p>
      </div>
      <div className={styles.containerNavbar}>
        <h1 className={styles.nomeLoja}>
          <Link href="/">PC Shop</Link>
        </h1>
        <hr />
        <div className={styles.navbarCategorias} onClick={changeOpen}>
          <FontAwesomeIcon icon={faBars} />
          <div>
            <p>Compre por</p>
            <p>DEPARTAMENTO</p>
          </div>
        </div>
        <div
          className={open ? `${styles.navbar} ${styles.active}` : styles.navbar}
        >
          <FontAwesomeIcon icon={faXmark} onClick={changeOpen} />

          <nav>
            <ul onClick={changeOpen}>
              <li>
                <Link href="/placa-mae">Placa-Mãe</Link>
              </li>
              <hr />
              <li>
                <Link href="/processador">Processador</Link>
              </li>
              <hr />
              <li>
                <Link href="/placa-de-video">Placa de Vídeo</Link>
              </li>
              <hr />
              <li>
                <Link href="/fonte">Fonte</Link>
              </li>
              <hr />
              <li>
                <Link href="/gabinete">Gabinete</Link>
              </li>
              <hr />
              <li>
                <Link href="/memoria-ram">Memória RAM</Link>
              </li>
              <hr />
              <li>
                <Link href="/ssd">SSD</Link>
              </li>
            </ul>
          </nav>
        </div>
        <input
          type="text"
          className={styles.busca}
          placeholder="Digite o que você procura"
        />
        <div className={styles.carrinho}>
          <Link href="/carrinho" passHref>
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavDesktop;
