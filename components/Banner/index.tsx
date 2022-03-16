import Image from "next/image";
import styles from "../../styles/Banner.module.scss";

function index() {
  return (
    <>
      <div className={styles.container}>
        <Image
          src={"/images/banner1.jpg"}
          alt="Banner1"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.container}>
        <Image
          src={"/images/banner2.jpg"}
          alt="Banner2"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </>
  );
}

export default index;
