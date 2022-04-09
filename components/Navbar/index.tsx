import { useEffect, useState } from "react";

import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

function Index() {
  const [width, setWidth] = useState(window.innerWidth);

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

  return <div>{width > 767 ? <NavDesktop /> : <NavMobile />}</div>;
}

export default Index;
