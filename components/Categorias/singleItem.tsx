import Image from "next/image";
import styles from "../../styles/Categorias.module.scss";

interface Props {
  img: string;
  name: string;
  pPrazo: number;
}

function singleItem({ img, name, pPrazo }: Props) {
  return (
    <div className={styles.item}>
      <Image src={img} alt="processador" height={140} width={140} />
      <h1 className={styles.nameItem}>{name}</h1>
      <hr />
      <p className={styles.pPrazo}>R$ {pPrazo.toFixed(2).replace(".", ",")}</p>
      <p className={styles.pPrazoDesc}>em até 12x no cartão</p>
      <p className={styles.pVista}>
        R$ {(pPrazo * 0.85).toFixed(2).replace(".", ",")}
      </p>
      <p className={styles.pVistaDesc}>à vista no boleto</p>
      <button>COMPRAR</button>
    </div>
  );
}

export default singleItem;
