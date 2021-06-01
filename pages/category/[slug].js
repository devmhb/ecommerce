import React from "react";
import Head from "next/head";
import styles from "../../styles/Category.module.scss";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import { API_URL } from "../../utils/urls";

const Category = ({ categories }) => {
  return (
    <>
      <Head>
        <title>{categories.name}</title>
      </Head>
      <div className={styles.category}>
        {/* <NavBar /> */}
        <header className={styles.header}>
          <h1>{categories.name}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            adipisci dolorem itaque corrupti aperiam accusamus dicta ex
            doloremque iste quam.
          </p>
        </header>
        <ProductsContainer products={categories.products} />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Category;

export async function getStaticProps({ params: { slug } }) {
  const product_res = await fetch(`${API_URL}/categories/?slug=${slug}`);
  const products = await product_res.json();

  return {
    props: {
      categories: products[0],
    },
  };
}

export async function getStaticPaths() {
  // Retrive all the possible paths
  const categories_res = await fetch(`${API_URL}/categories`);
  const categories = await categories_res.json();

  // Return then to nextjs context
  return {
    paths: categories.map((category) => ({
      params: { slug: String(category.slug) },
    })),
    fallback: false,
  };
}
