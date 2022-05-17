import type { NextPage } from "next";

import Navbar from "../components/Navbar";
import Products from "../components/ProdutosInicio/Index";
import Informacoes from "../components/Informacoes/Index";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Products />
      <Informacoes />
    </div>
  );
};

export default Home;
