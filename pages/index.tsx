import type { NextPage } from "next";

import Navbar from "../components/Navbar/Index";
import Banner from "../components/Banner/Index";
import Products from "../components/ProdutosInicio/Index";
import Footer from "../components/Footer/Index";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
