import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";


import Navbar from "../../components/Navbar";
import Informacao from "../../components/Informacoes/Index";
import Busca from "../../components/Categorias/Busca";

export default function CategoriaQuery() {
  return (
    <div>
      <Navbar />
      <Busca />
      <Informacao />
    </div>
  );
}