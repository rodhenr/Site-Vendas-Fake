import { useState } from "react";

import Navbar from "../Navbar/Index";
import Informacoes from "../Informacoes/Index";
import Produto from "./Produto";
import VerMais from "./VerMais";
import Descricao from "./Descricao";
import Especificacao from "./Especificacao";

import { faGear, faScroll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../../styles/ProdutoPagina.module.scss";

interface Props {
  categoria: string;
  img: string;
  id: string;
  fabricante: string;
  name: string;
  pathName: string;
  pPrazo: number;
  garantia: string;
  specs: object[];
  promo: boolean;
}

function Index(props: Props) {
  const [desc, setDesc] = useState({ sobre: true, spec: false });
  const {
    specs,
    img,
    name,
    pPrazo,
    categoria,
    pathName,
    fabricante,
    garantia,
    promo,
    id,
  } = props;

  function handleDesc(state: string) {
    if (state === "sobre") {
      setDesc({
        sobre: true,
        spec: false,
      });
    } else {
      setDesc({
        sobre: false,
        spec: true,
      });
    }
  }

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <Produto
          categoria={categoria}
          img={img}
          id={id}
          fabricante={fabricante}
          name={name}
          pathName={pathName}
          pPrazo={pPrazo}
          garantia={garantia}
          specs={specs}
          promo={promo}
        />
        <div className={styles.produtoDescricao}>
          <div className={styles.descricaoCima}>
            <div
              className={
                desc.sobre
                  ? `${styles.descricaoTitulo} ${styles.tituloAtivo}`
                  : styles.descricaoTitulo
              }
              onClick={() => handleDesc("sobre")}
            >
              <FontAwesomeIcon icon={faScroll} />
              <h1>SOBRE</h1>
            </div>
            <div
              className={
                desc.spec
                  ? `${styles.descricaoTitulo} ${styles.tituloAtivo}`
                  : styles.descricaoTitulo
              }
              onClick={() => handleDesc("specs")}
            >
              <FontAwesomeIcon icon={faGear} />
              <h1>ESPECIFICAÇÕES</h1>
            </div>
          </div>
          {desc.sobre ? <Descricao /> : <Especificacao specs={specs} />}
        </div>
        <div>
          <VerMais />
        </div>
      </div>
      <Informacoes />
    </div>
  );
}

export default Index;
