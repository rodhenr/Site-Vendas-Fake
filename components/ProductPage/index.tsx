import Navbar from "../Navbar/index";
import Footer from "../Footer/index";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import {
  faCreditCard,
  faMoneyBill1Wave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/ProductPage.module.scss";

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
        <div className={styles.productContainer}>
          <div className={styles.img}>
            <Image src={img} alt="testando" height={350} width={350} />
          </div>
          <h1 className={styles.name}>{name}</h1>
          <div className={styles.containerPrices}>
            <div className={styles.containerPrazo}>
              <FontAwesomeIcon icon={faCreditCard} />
              <div>
                <p className={styles.pPrazo}>
                  {pPrazo.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <p className={styles.pPrazoDesc}>em até 12x no cartão</p>
              </div>
            </div>
            <div className={styles.containerVista}>
              <FontAwesomeIcon icon={faMoneyBill1Wave} />
              <div>
                <p className={styles.pVista}>
                  {(pPrazo * 0.85).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <p className={styles.pVistaDesc}>à vista no boleto</p>
              </div>
            </div>
          </div>
          <button className={styles.buyButton} onClick={handleClick}>
            COMPRAR
          </button>
          <div className={styles.productDesc}>
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
          <div className={styles.specs}>
            <h1>Especificações</h1>
            <hr />
            {specs.map((i, key) => (
              <p key={key} className={styles.specsDesc}>
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
