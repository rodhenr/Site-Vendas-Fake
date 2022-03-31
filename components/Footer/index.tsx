import Image from "next/image";

import styles from "../../styles/Footer.module.scss";

function Index() {
  return (
    <>
      <div className={styles.containerLoja}>
        <h1>SOBRE A LOJA</h1>
        <p>
          A PC SHOP é uma empresa especializada em componentes de Alta
          Performance para seu computador. Parcelamos suas compras em 12x sem
          juros no cartão. Estamos neste mercado a 5 Anos e já vendemos mais de
          10 mil componentes. Compre pelo site e receba com total segurança.
        </p>
        <hr />
      </div>
      <div className={styles.containerPagamento}>
        <h1>ACEITAMOS AS SEGUINTES FORMAS DE PAGAMENTO</h1>
        <div className={styles.pagamentoFormas}>
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
      <footer className={styles.footer}>
        <p>2022 - © PC Shop. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default Index;
