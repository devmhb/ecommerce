import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./productsContainer.module.scss";

const ProductsContainer = () => {
  return (
    <div className={styles.productsContainer}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductsContainer;
