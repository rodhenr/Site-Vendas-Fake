import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Navbar from "./Navbar";
import NavDetalhesMobile from "./NavDetalhesMobile";

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
  const [busca, setBusca] = useState("");
  const [fazerBusca, setFazerBusca] = useState(false);
  const router = useRouter();

  function changeOpen() {
    setOpen(!open);
  }

  function changeBusca() {
    setFazerBusca(!fazerBusca);
  }

  function handleBusca(evt: React.ChangeEvent<HTMLInputElement>) {
    let novaBusca = evt.target.value;
    setBusca(novaBusca);
  }

  function handleInputEnter(evt: React.KeyboardEvent<HTMLInputElement>) {
    if (evt.key === "Enter") {
      router.push(`/busca?q=${busca}`);
    }
  }

  return (
    <div className={styles.container}>
      <div>
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
                <div className={styles.carrinho} data-cy="cart">
                  <FontAwesomeIcon icon={faCartShopping} />
                  <div className={styles.carrinhoNumeroItem} data-cy="num-cart">
                    {numCart}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {fazerBusca ? (
          <div className={styles.busca}>
            <input
              type="text"
              placeholder="Digite o que você procura"
              onChange={handleBusca}
              onKeyPress={handleInputEnter}
            />
            <Link href={{ pathname: "busca", query: { q: busca } }} passHref>
              <button className={styles.buscaIcone}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </Link>
          </div>
        ) : null}
      </div>
      <NavDetalhesMobile />
    </div>
  );
}

export default NavMobile;
