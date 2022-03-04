import type { NextPage } from "next";
import Navbar from "../components/Navbar/index";
import Banner from "../components/Banner/index";
import Products from "../components/Home/index";
import Footer from "../components/Footer/index";

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
