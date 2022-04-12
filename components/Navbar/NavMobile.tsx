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

function NavMobile({ numCart }: Props) {
  const [open, setOpen] = useState(false);
  const [busca, setBusca] = useState(false);

  function changeOpen() {
    setOpen(!open);
  }

  function changeBusca() {
    setBusca(!busca);
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerFixed}>
        <div className={styles.containerTopo}>
          <div className={styles.containerNavbar}>
            <div className={styles.categorias} onClick={changeOpen}>
              <FontAwesomeIcon icon={faBars} />
            </div>
            <Navbar open={open} changeOpen={changeOpen} />
          </div>
          <h1 className={styles.nomeLoja}>
            <Link href="/">PC Shop</Link>
          </h1>
          <div className={styles.opcoesExtras}>
            <div className={styles.opcoesBusca} onClick={changeBusca}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <FontAwesomeIcon icon={faUser} />
            <div>
              <Link href="/carrinho" passHref>
                <div>
                  <FontAwesomeIcon icon={faCartShopping} />
                  <div className={styles.carrinhoNumeroItem}>{numCart}</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {busca ? (
          <div className={styles.busca}>
            <input type="text" placeholder="Digite o que você procura" />
            <div className={styles.buscaIcone}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default NavMobile;
