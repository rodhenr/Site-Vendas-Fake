import { useState } from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faCartShopping,
  faXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/Navbar.module.scss";

interface Props {
  numCart: number;
}

function NavDesktop({ numCart }: Props) {
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
        <div className={styles.navNomeCategoria}>
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
        </div>
        <div
          className={open ? `${styles.navbar} ${styles.active}` : styles.navbar}
        >
          <div className={styles.navAtivoOpcoes}>
            <FontAwesomeIcon icon={faXmark} onClick={changeOpen} />
            <div className={styles.navAtivoExtra}>
              <FontAwesomeIcon icon={faUser} />
              <Link href="/carrinho" passHref>
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </div>
          </div>

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
        <div className={styles.busca}>
          <input type="text" placeholder="Digite o que você procura" />
          <div className={styles.buscaIcone}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
        <div className={styles.carrinho}>
          <Link href="/carrinho" passHref>
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
          <div className={styles.carrinhoNumeroItem}>{numCart}</div>
        </div>
      </div>
    </div>
  );
}

export default NavDesktop;
