import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Banner.module.scss";

function Index() {
  return (
    <div className={styles.container}>
      <div>
        <Link href="/fonte" passHref>
          <div className={styles.bannerInteiro}>
            <Image
              src={"/images/banner-inteiro.jpg"}
              alt="Banner1"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Link>
      </div>
      <div className={styles.containerDuplo}>
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
    </div>
  );
}

export default Index;
