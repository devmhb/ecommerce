import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ProductCard from "../ProductCard/ProductCard";
// const ProductCard = dynamic(() => import("../ProductCard/ProductCard"));
import styles from "./productsContainer.module.scss";

const ProductsContainer = ({ products, visible }) => {
  return (
    <div className={styles.productsContainer}>
      {products.slice(0, visible).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsContainer;
