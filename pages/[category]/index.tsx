import Categoria from "../../components/Categorias/index";
import itemsList from "../../listaItems/index";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface Props {
  itemObj: Array<Object>;
}

interface IParams extends ParsedUrlQuery {
  id: string;
}

export default function index({ itemObj }: Props) {
  return (
    <div>
      <Categoria listaItem={itemObj} />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = itemsList.map((i) => {
    return {
      params: {
        category: i.categoria,
        id: i.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};
