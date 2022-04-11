import Pagamento from "./Pagamento";

import styles from "../../styles/Footer.module.scss";

function Index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerLoja}>
          <div className={styles.lojaInfo}>
            <h1>ATENDIMENTO</h1>
            <p>
              <strong>Horário de Atendimento:</strong> Segunda à Sexta-feira de
              8:00h às 18h{" "}
            </p>
            <p>
              <strong>Sábado Fechado:</strong> devido ao Coronavírus (COVID-19)
            </p>
            <p>
              <strong>LOJA FÍSICA</strong>
            </p>
            <p>Rua xxxxxxxxxx nº 100, Bairro xxxxxxx - São Paulo - 11111-111</p>
          </div>
          <Pagamento />
          <div className={styles.lojaInfoExtra}>
            <p>- Imagens meramente ilustrativas;</p>
            <p>
              - Descrições e dados técnicos dos produtos são retirados
              diretamente da embalagem do produto e/ou site do Fabricante;
            </p>
            <p>
              - Os preços, disponibilidade e condições de pagamento dos nossos
              produtos podem variar de acordo com o mercado e podem ser
              alterados sem aviso prévio;
            </p>
            <p>
              - Os preços apresentados no site prevalecem sobre outros
              anunciados em qualquer outro meio de comunicação ou sites de
              buscas; Em caso de divergência de preços no site, o valor válido é
              o do Carrinho de Compras;
            </p>
            <p>
              - O prazo de entrega pode variar de acordo com a localidade do
              destino referente à forma de entrega escolhida. Os Correios
              entregam produtos com no máximo 30Kg (PAC e Sedex) e 15KG
              (e-Sedex);
            </p>
          </div>
        </div>
        <div className={styles.lojaSobre}>
          <h1>PC SHOP</h1>
          <div>
            <p>
              A PC SHOP é uma empresa especializada em componentes de Alta
              Performance para seu computador. Parcelamos suas compras em 12x
              sem juros no cartão. Estamos neste mercado a 5 Anos e já vendemos
              mais de 10 mil componentes. Compre pelo site e receba com total
              segurança.
            </p>
            <p>PC Shop © - Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
