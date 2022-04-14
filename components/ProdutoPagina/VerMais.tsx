import listaItens from "../../listaItems/Index";
import Item from "../Item/Item";

import styles from "../../styles/ProdutoPagina.module.scss";

function VerMais() {
  function randNum() {
    let numArray: number[] = [];

    while (numArray.length < 4) {
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
      <h1>Veja Também!</h1>
      <div className={styles.itemVerMais}>
        {sortear().map((i, key) => (
          <Item
            key={key}
            img={i.img}
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
