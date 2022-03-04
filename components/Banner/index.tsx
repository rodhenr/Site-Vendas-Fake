import Image from "next/image";
import banner from "../../public/images/banner.jpg";
import styles from "../../styles/Banner.module.scss";

function index() {
  return (
    <div className={styles.container}>
      <Image
        src={banner}
        alt="Banner"
        height={390}
        width={1100}
        layout="responsive"
      />
    </div>
  );
}

export default index;
