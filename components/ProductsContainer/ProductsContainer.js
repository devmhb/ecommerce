import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./productsContainer.module.scss";
import products from "../../products.json";

const ProductsContainer = ({ category, featured }) => {
  const filteredProducts = products.filter((product) => {
    return product.category === category;
  });

  if (featured) {
    const featuredProducts = products.filter((product) => {
      return product.featured === featured;
    });

    return (
      <div className={styles.productsContainer}>
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  } else {
    return (
      <div className={styles.productsContainer}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }
};

export default ProductsContainer;
