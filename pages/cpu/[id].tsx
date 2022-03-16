import TestItem from "../../components/ProductPage/index";
import itemsList from "../../components/itemsList";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";

interface Props {
  img: string;
  garantia: string;
  name: string;
  pPrazo: number;
  specs: Array<string>;
}

export default function ItemPage({
  img,
  garantia,
  name,
  pPrazo,
  specs,
}: Props) {
  const router = useRouter();
  const itemID = router.query.id;

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
export const getStaticProps: GetStaticProps = async () => {
  //filtrar o objeto correto (página atual) para então buscar suas props
  //const item = itemsList.filter(i => i.name === itemID)
  //return {
  // props: {
  //   img: item.img,
  //   garantia: item.garantia,
  //   name: item.name,
  //   pPrazo: item.pPrazo,
  //   specs: item.specs,
  // },
  //},
  //};

  return {
    props: {
      img: "/images/intel1.jpg",
      garantia: "36 meses",
      name: "Processador Intel Core i50-10105, Cache 6MB, 3.7GHz (4.4GHz Max Turbo), LGA 1200 - BX8070110105",
      pPrazo: 5000,
      specs: [
        "Número de núcleos: 4",
        "Nº de threads: 8",
        "Frequência baseada em processador: 3.70 GHz",
        "Frequência turbo max: 4.40 GHz",
        "Cache: 6 MB Intel Smart Cache",
        "TDP: 65 W",
        "Tamanho máximo de memória: 128 GB",
        " Tipos de memória: DDR4-2666",
        "Nº máximo de canais de memória: 2",
        "Gráficos UHD Intel: 630",
        "Resolução máxima (HDMI 1.4): 4096 x 2160@30Hz",
        "Resolução máxima (DP): 4096 x 2304@60Hz",
        "Nº de monitores aceitos: 3",
        "Soquetes suportados: FCLGA1200",
      ],
    },
  };
};

export async function getStaticPaths() {
  const paths = itemsList.map((i) => {
    return {
      params: {
        id: i.name,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
