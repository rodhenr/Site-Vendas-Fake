import TestItem from "../../components/ProductPage/index";
import itemsList from "../../components/itemsList";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";

export default function ItemPage() {
  const router = useRouter();
  const itemID = router.query.id;

  const item = itemsList.filter((i) => i.name === itemID);
  const obj = Object.assign({}, ...item);

  return (
    <div>
      <TestItem
        img={obj.img}
        garantia={obj.garantia}
        name={obj.name}
        pPrazo={obj.pPrazo}
        specs={obj.specs}
      />
    </div>
  );
}

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
    fallback: true,
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
