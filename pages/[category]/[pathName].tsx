import TestItem from "../../components/ProductPage/index";
import itemsList from "../../listaItems/index";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface Props {
  img: string;
  garantia: string;
  name: string;
  pPrazo: number;
  specs: Array<string>;
}

interface IParams extends ParsedUrlQuery {
  id: string;
}

export default function ItemPage({
  img,
  garantia,
  name,
  pPrazo,
  specs,
}: Props) {
  return (
    <div>
      <TestItem
        img={img}
        garantia={garantia}
        name={name}
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
      img: obj.img,
      garantia: obj.garantia,
      name: obj.name,
      pPrazo: obj.pPrazo,
      specs: obj.specs,
    },
  };
};
