import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Banner.module.scss";

function Index() {
  return (
    <div className={styles.container}>
      <Link href="/processador" passHref>
        <div className={styles.banner}>
          <Image
            src={"/images/banner1.jpg"}
            alt="Banner1"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Link>
      <Link href="/placa-de-video" passHref>
        <div className={styles.banner}>
          <Image
            src={"/images/banner2.jpg"}
            alt="Banner2"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Link>
    </div>
  );
}

export default Index;
