import Navbar from "../Navbar";
import Informacoes from "../Informacoes/Index";
import Produto from "./Produto";
import VerMais from "./VerMais";
import Espec from "./Especificacao";

import styles from "../../styles/ProdutoPagina.module.scss";

interface Props {
  modelo: string;
  categoria: string;
  img: string;
  img2: string;
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

  const {
    specs,
    img,
    img2,
    name,
    pPrazo,
    categoria,
    pathName,
    fabricante,
    garantia,
    promo,
    id,
    modelo,
  } = props;

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <Produto
          modelo={modelo}
          categoria={categoria}
          img={img}
          img2={img2}
          id={id}
          fabricante={fabricante}
          name={name}
          pathName={pathName}
          pPrazo={pPrazo}
          garantia={garantia}
          specs={specs}
          promo={promo}
        />
        <div className={styles.containerDescricao}>
          <div className={styles.descricaoTitulo}>
            <h1>ESPECIFICAÇÕES</h1>
          </div>
          <Espec specs={specs} />
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
