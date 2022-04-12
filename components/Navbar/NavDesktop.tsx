import { useState } from "react";
import Link from "next/link";

import Navbar from "./Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faCartShopping,
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
          <div className={styles.categorias} onClick={changeOpen}>
            <FontAwesomeIcon icon={faBars} />
            <div>
              <p>Compre por</p>
              <p>DEPARTAMENTO</p>
            </div>
          </div>
        </div>
        <Navbar open={open} changeOpen={changeOpen} />
        <div className={styles.busca}>
          <input type="text" placeholder="Digite o que você procura" />
          <div className={styles.buscaIcone}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
        <div className={styles.carrinho}>
          <Link href="/carrinho" passHref>
            <div>
              <FontAwesomeIcon icon={faCartShopping} />
              <div className={styles.carrinhoNumeroItem}>{numCart}</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavDesktop;
