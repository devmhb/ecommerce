import React from "react";
import Image from "next/image";
import styles from "./productCard.module.scss";

const ProductCard = () => {
  const tagStyles = {
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "100",
    margin: "1.2rem",
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.productImg}>
        <div className="tag tag-colored tag-s" style={tagStyles}>
          - 36%
        </div>
        <Image
          className={styles.img}
          src="/macbook.jpeg"
          alt="product"
          width={904}
          height={840}
        />
      </div>
      <h3 className={styles.title}>Lorem, ipsum dolor.</h3>
      <p className={styles.desc}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <div className={styles.lowerSec}>
        <div className={styles.price}>
          <p className={styles.currPrice}>36.9 USD</p>
          <p className={styles.oldPrice}>48.9 USD</p>
        </div>
        <button className="btn btn-colored btn-s">Buy now</button>
      </div>
    </div>
  );
};

export default ProductCard;
