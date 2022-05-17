import listaItens from "../../listaItems";
import Item from "../Item/Item";

import styles from "../../styles/ProdutoPagina.module.scss";

function VerMais() {
  function randNum() {
    let numArray: number[] = [];

    while (numArray.length < 5) {
      let newNum: number = Math.floor(Math.random() * listaItens.length);
      if (!numArray.includes(newNum)) {
        numArray.push(newNum);
      }
    }

    return numArray;
  }

  function sortear() {
    let sorteados = randNum();
    let novoArray = [];

    for (let i = 0; i < sorteados.length; i++) {
      let num = sorteados[i];
      novoArray.push(listaItens[num]);
    }

    return novoArray;
  }

  return (
    <div className={styles.containerVerMais}>
      <h1>PRODUTOS RELACIONADOS</h1>
      <div className={styles.itemVerMais}>
        {sortear().map((i, key) => (
          <Item
            modelo={i.modelo}
            key={key}
            img={i.img}
            img2={i.img2}
            name={i.name}
            pathName={i.pathName}
            pPrazo={i.pPrazo}
            categoria={i.categoria}
            fabricante={i.fabricante}
            id={i.id}
            garantia={i.garantia}
            specs={i.specs}
            promo={i.promo}
          />
        ))}
      </div>
    </div>
  );
}

export default VerMais;
