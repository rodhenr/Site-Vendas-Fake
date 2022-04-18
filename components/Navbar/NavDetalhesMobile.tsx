import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faBarcode,
  faCircleCheck,
  faCreditCard,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/Navbar.module.scss";

function NavDetalhesMobile() {
  const [dados, setDados] = useState({
    pos: 0,
    titulo: "RECEBA SEU PEDIDO",
    desc: "no conforto da sua casa",
    icone: faTruck,
  });
  const arrayDados = [
    {
      titulo: "RECEBA SEU PEDIDO",
      desc: "No conforto da sua casa",
      icone: faTruck,
    },
    {
      titulo: "PARCELE SEU PEDIDO",
      desc: "Em até 12x",
      icone: faCreditCard,
    },
    {
      titulo: "DESCONTO NO",
      desc: "Boleto/PIX",
      icone: faBarcode,
    },
    {
      titulo: "AS MELHORES OFERTAS",
      desc: "Venha conferir!",
      icone: faCircleCheck,
    },
  ];

  function handleAdd() {
    if (dados.pos === 3) {
      let novaPos = 0;
      setDados({
        pos: novaPos,
        titulo: arrayDados[novaPos].titulo,
        desc: arrayDados[novaPos].desc,
        icone: arrayDados[novaPos].icone,
      });
    } else {
      let novaPos = dados.pos + 1;
      setDados({
        pos: novaPos,
        titulo: arrayDados[novaPos].titulo,
        desc: arrayDados[novaPos].desc,
        icone: arrayDados[novaPos].icone,
      });
    }
  }

  function handleSub() {
    if (dados.pos === 0) {
      let novaPos = 3;
      setDados({
        pos: novaPos,
        titulo: arrayDados[novaPos].titulo,
        desc: arrayDados[novaPos].desc,
        icone: arrayDados[novaPos].icone,
      });
    } else {
      let novaPos = dados.pos - 1;
      setDados({
        pos: novaPos,
        titulo: arrayDados[novaPos].titulo,
        desc: arrayDados[novaPos].desc,
        icone: arrayDados[novaPos].icone,
      });
    }
  }

  return (
    <div className={styles.containerDetalhes}>
      <span onClick={handleSub}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </span>
      <div className={styles.detalhesItem}>
        <FontAwesomeIcon icon={dados.icone} />
        <div>
          <h1>{dados.titulo}</h1>
          <p>{dados.desc}</p>
        </div>
      </div>
      <span onClick={handleAdd}>
        <FontAwesomeIcon icon={faArrowRight} />
      </span>
    </div>
  );
}

export default NavDetalhesMobile;
