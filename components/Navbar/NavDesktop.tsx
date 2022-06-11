import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import NavDetalhesDesktop from "./NavDetalhesDesktop";

import styles from "../../styles/Navbar.module.scss";

interface Props {
  numCart: number;
}

function NavDesktop({ numCart }: Props) {
  const [open, setOpen] = useState(false);
  const [busca, setBusca] = useState("");
  const router = useRouter();

  function changeOpen() {
    setOpen(!open);
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
      <div className={styles.containerNavbar}>
        <div className={styles.navNomeCategoria}>
          <h1 className={styles.nomeLoja}>
            <Link href="/">PC Shop</Link>
          </h1>
        </div>

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
        <div className={styles.containerLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>
            <p>Olá, seja bem-vindo</p>
            <Link href={"/"} passHref>
              <p>Entrar</p>
            </Link>
          </div>
        </div>
        <div className={styles.carrinho}>
          <Link href="/carrinho" passHref>
            <div data-cy="cart">
              <FontAwesomeIcon icon={faCartShopping} />
              <div className={styles.carrinhoNumeroItem} data-cy="num-cart">{numCart}</div>
            </div>
          </Link>
        </div>
      </div>
      <nav className={styles.navDesktop} onClick={changeOpen}>
        <ul>
          <Link href="/placa-mae" passHref >
            <li data-cy="category-motherboard">
              <span>PLACA-MÃE</span>
            </li>
          </Link>
          <Link href="/processador" passHref>
            <li data-cy="category-cpu">
              <span>PROCESSADOR </span>
            </li>
          </Link>
          <Link href="/placa-de-video" passHref>
            <li data-cy="category-gpu">
              <span>PLACA DE VÍDEO </span>
            </li>
          </Link>
          <Link href="/fonte" passHref>
            <li data-cy="category-psu">
              <span>FONTE </span>
            </li>
          </Link>
          <Link href="/gabinete" passHref>
            <li data-cy="category-pccase">
              <span> GABINETE </span>
            </li>
          </Link>
          <Link href="/memoria-ram" passHref>
            <li data-cy="category-ram">
              <span>MEMÓRIA RAM </span>
            </li>
          </Link>
          <Link href="/ssd" passHref>
            <li data-cy="category-ssd">
              <span>SSD</span>
            </li>
          </Link>
        </ul>
      </nav>
      <NavDetalhesDesktop />
    </div>
  );
}

export default NavDesktop;
