import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import Produto from "../../components/ProdutoPagina/Index";
import itemsList from "../../listaItems";

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

interface IParams extends ParsedUrlQuery {
  id: string;
}

export default function ItemPage({
  modelo,
  categoria,
  fabricante,
  id,
  img,
  img2,
  garantia,
  name,
  pathName,
  pPrazo,
  specs,
  promo,
}: Props) {
  return (
    <div>
      <Produto
        modelo={modelo}
        categoria={categoria}
        fabricante={fabricante}
        id={id}
        img={img}
        img2={img2}
        garantia={garantia}
        name={name}
        pathName={pathName}
        pPrazo={pPrazo}
        specs={specs}
        promo={promo}
      />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = itemsList.map((i) => {
    return {
      params: {
        pathName: i.pathName,
        id: i.id,
        category: i.categoria,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { pathName } = context.params as IParams;
  const item = itemsList.filter((i) => i.pathName === pathName);
  const obj = Object.assign({}, ...item);

  return {
    props: {
      modelo: obj.modelo,
      categoria: obj.categoria,
      fabricante: obj.fabricante,
      id: obj.id,
      img: obj.img,
      img2: obj.img2,
      garantia: obj.garantia,
      name: obj.name,
      pathName: obj.pathName,
      pPrazo: obj.pPrazo,
      specs: obj.specs,
      promo: obj.promo,
    },
  };
};
