import styles from "../../styles/Informacoes.module.scss";

function InfoExtra() {
  return (
    <div className={styles.lojaInfoExtra}>
      <p>Imagens meramente ilustrativas;</p>
      <p>
        Descrições e dados técnicos dos produtos são retirados diretamente da
        embalagem do produto e/ou site do Fabricante;
      </p>
      <p>
        Os preços, disponibilidade e condições de pagamento dos nossos produtos
        podem variar de acordo com o mercado e podem ser alterados sem aviso
        prévio;
      </p>
      <p>
        Os preços apresentados no site prevalecem sobre outros anunciados em
        qualquer outro meio de comunicação ou sites de buscas; Em caso de
        divergência de preços no site, o valor válido é o do Carrinho de
        Compras;
      </p>
      <p>
        O prazo de entrega pode variar de acordo com a localidade do destino
        referente à forma de entrega escolhida. Os Correios entregam produtos
        com no máximo 30Kg (PAC e Sedex) e 15KG (e-Sedex);
      </p>
    </div>
  );
}

export default InfoExtra;
