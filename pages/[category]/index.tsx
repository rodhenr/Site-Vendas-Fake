import { GetStaticProps } from "next";

import Categoria from "../../components/Categorias/Index";
import itemsList from "../../listaItems/Index";

interface Props {
  itemObj: object[];
}

export default function index({ itemObj }: Props) {
  return (
    <div>
      <Categoria />
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
