import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Banner.module.scss";

function index() {
  return (
    <>
      <Link href="/processador" passHref>
        <div className={styles.container}>
          <Image
            src={"/images/banner1.jpg"}
            alt="Banner1"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Link>
      <Link href="/placa-de-video" passHref>
        <div className={styles.container}>
          <Image
            src={"/images/banner2.jpg"}
            alt="Banner2"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Link>
    </>
  );
}

export default index;
