import React from "react";
import Image from "next/image";
import styles from "./productCard.module.scss";
import Link from "next/link";
import { fromImgToUrl } from "../../utils/urls";

const ProductCard = ({ product }) => {
  const tagStyles = {
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "100",
    margin: "1.2rem",
  };

  return (
    <Link href={`/product/${product.slug}`}>
      <div className={styles.productCard}>
        <div className={styles.productImg}>
          {product.offer && (
            <div className="tag tag-colored tag-s" style={tagStyles}>
              - {product.offer}%
            </div>
          )}
          <div className={styles.imgWrapper}>
            <img
              className={styles.img}
              src={fromImgToUrl(product.image)}
              alt="product"
            />
          </div>
        </div>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.desc}>{product.s_desc}</p>
        <div className={styles.lowerSec}>
          <div className={styles.price}>
            <p className={styles.currPrice}>{product.price} USD</p>
            <p className={styles.oldPrice}>{product.old_price} USD</p>
          </div>
          <button className="btn btn-colored btn-s">Buy now</button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
