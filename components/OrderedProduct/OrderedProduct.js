import Image from "next/image";
import React from "react";
import styles from "./orderedProduct.module.scss";

const OrderedProduct = () => {
  return (
    <div className={styles.orderedProduct}>
      <div className={styles.leftSec}>
        <Image src="/macbook.jpeg" width={200} height={200} />
      </div>
      <div className={styles.middleSec}>
        <div className={styles.upper}>
          <h2 className={styles.title}>Produtct Title</h2>
          <p className={styles.subTitle}>Sub Title</p>
        </div>
        <div className={styles.lower}>
          <button className="btn btn-simple btn-s">-</button>
          <p className={styles.quantity}>3</p>
          <button className="btn btn-simple btn-s">+</button>
        </div>
      </div>
      <div className={styles.rightSec}>
        <p className={styles.price}>400 USD</p>
        <p className={styles.oldPrice}>500 USD</p>
      </div>
      <button
        className="btn btn-simple"
        style={{ position: "absolute", top: "1rem", right: "1rem" }}
      >
        <Image
          src="/icons/ic-actions-close-simple.svg"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};

export default OrderedProduct;
