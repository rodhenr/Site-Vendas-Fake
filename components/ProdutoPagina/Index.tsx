import Image from "next/image";
import { useDispatch } from "react-redux";

import { addToCart } from "../../store/slices/cartSlice";
import Navbar from "../Navbar/Index";
import Footer from "../Footer/Index";

import {
  faCreditCard,
  faMoneyBill1Wave,
} from "@fortawesome/free-solid-svg-icons";
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
  specs: string[];
}

function Index(props: Props) {
  const dispatch = useDispatch();
  const { img, garantia, name, specs, pPrazo } = props;

  function handleClick() {
    alert("Adicionado ao carrinho com sucesso!");
    dispatch(addToCart(props));
  }

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.containerProduto}>
          <div className={styles.produtoImagem}>
            <Image src={img} alt="testando" height={350} width={350} />
          </div>
          <h1 className={styles.produtoNome}>{name}</h1>
          <div className={styles.containerPrecos}>
            <div className={styles.containerPrazo}>
              <FontAwesomeIcon icon={faCreditCard} />
              <div className={styles.precoPrazo}>
                <p>
                  {pPrazo.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <p>em até 12x no cartão</p>
              </div>
            </div>
            <div className={styles.containerVista}>
              <FontAwesomeIcon icon={faMoneyBill1Wave} />
              <div className={styles.precoVista}>
                <p>
                  {(pPrazo * 0.85).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <p>à vista no boleto</p>
              </div>
            </div>
          </div>
          <button className={styles.comprar} onClick={handleClick}>
            COMPRAR
          </button>
          <div className={styles.productDescricao}>
            <h1>Descrição do Produto</h1>
            <hr />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet vel
              suscipit ipsam eligendi facilis earum adipisci repudiandae vitae
              soluta nesciunt? Doloremque cumque veniam asperiores dolores
              necessitatibus, maxime repudiandae delectus consectetur. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Tempora
              exercitationem quo, odit perferendis, consequuntur sunt inventore
              ullam laudantium vel error, a in accusamus fugiat quam quas
              placeat et dolorem. Adipisci! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatem possimus nesciunt modi
              totam unde vel, fugiat quisquam. Itaque eaque perspiciatis eius.
              Suscipit, consequatur a alias iste molestiae dicta consequuntur
              vitae?
            </p>
          </div>
          <div className={styles.produtoEspec}>
            <h1>Especificações</h1>
            <hr />
            {specs.map((i, key) => (
              <p key={key} className={styles.EspecDescricao}>
                - {i}
              </p>
            ))}
            <p className={styles.garantia}>Garantia de {garantia}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
