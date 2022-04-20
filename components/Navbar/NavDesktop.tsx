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
    console.log(evt);
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
            <div>
              <FontAwesomeIcon icon={faCartShopping} />
              <div className={styles.carrinhoNumeroItem}>{numCart}</div>
            </div>
          </Link>
        </div>
      </div>
      <nav className={styles.navDesktop} onClick={changeOpen}>
        <ul>
          <li>
            <Link href="/placa-mae">PLACA-MÃE</Link>
          </li>
          <li>
            <Link href="/processador">PROCESSADOR</Link>
          </li>
          <li>
            <Link href="/placa-de-video">PLACA DE VÍDEO</Link>
          </li>
          <li>
            <Link href="/fonte">FONTE</Link>
          </li>
          <li>
            <Link href="/gabinete">GABINETE</Link>
          </li>
          <li>
            <Link href="/memoria-ram">MEMÓRIA RAM</Link>
          </li>
          <li>
            <Link href="/ssd">SSD</Link>
          </li>
        </ul>
      </nav>
      <NavDetalhesDesktop />
    </div>
  );
}

export default NavDesktop;
