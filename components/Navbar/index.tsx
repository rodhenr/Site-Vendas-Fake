import { useEffect, useState } from "react";

import { RootState } from "../../store/Store";
import { useSelector } from "react-redux";

import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

function Index() {
  const [width, setWidth] = useState(window.innerWidth);
  const cartStore = useSelector((state: RootState) => state.cartStore.cart);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  return (
    <header>
      {width > 767 ? (
        <NavDesktop numCart={cartStore.length} />
      ) : (
        <NavMobile numCart={cartStore.length} />
      )}
    </header>
  );
}

export default Index;
