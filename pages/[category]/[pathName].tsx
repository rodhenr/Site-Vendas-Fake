import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import TestItem from "../../components/ProdutoPagina/Index";
import itemsList from "../../listaItems/Index";

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

interface IParams extends ParsedUrlQuery {
  id: string;
}

export default function ItemPage({
  categoria,
  fabricante,
  id,
  img,
  garantia,
  name,
  pathName,
  pPrazo,
  specs,
}: Props) {
  return (
    <div>
      <TestItem
        categoria={categoria}
        fabricante={fabricante}
        id={id}
        img={img}
        garantia={garantia}
        name={name}
        pathName={pathName}
        pPrazo={pPrazo}
        specs={specs}
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
      categoria: obj.categoria,
      fabricante: obj.fabricante,
      id: obj.id,
      img: obj.img,
      garantia: obj.garantia,
      name: obj.name,
      pathName: obj.pathName,
      pPrazo: obj.pPrazo,
      specs: obj.specs,
    },
  };
};
