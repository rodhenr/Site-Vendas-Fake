import Image from "next/image";

import styles from "../../styles/Informacoes.module.scss";

function Pagamento() {
  return (
    <div className={styles.pagamento}>
      <h1>PAGAMENTO</h1>
      <div className={styles.containerFormas}>
        <div className={styles.pagamentoTipo}>
          <Image
            src={"/images/american.png"}
            alt="AMERICAN"
            height={40}
            width={64}
          />
        </div>
        <div className={styles.pagamentoTipo}>
          <Image src={"/images/pix.png"} alt="PIX" height={40} width={64} />
        </div>
        <div className={styles.pagamentoTipo}>
          <Image src={"/images/visa.png"} alt="VISA" height={40} width={64} />
        </div>
        <div className={styles.pagamentoTipo}>
          <Image
            src={"/images/mastercard.png"}
            alt="MASTERCARD"
            height={40}
            width={64}
          />
        </div>
        <div className={styles.pagamentoTipo}>
          <Image
            src={"/images/boleto.png"}
            alt="BOLETO"
            height={40}
            width={64}
          />
        </div>
        <div className={styles.pagamentoTipo}>
          <Image
            src={"/images/paypal.png"}
            alt="PAYPAL"
            height={40}
            width={64}
          />
        </div>
      </div>
    </div>
  );
}

export default Pagamento;
