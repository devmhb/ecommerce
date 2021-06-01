import React from "react";
import Head from "next/head";
import styles from "../../styles/ProductDetails.module.scss";
import Image from "next/image";
import { fromImgToUrl, API_URL } from "../../utils/urls";

const ProductDetails = ({ product }) => {
  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.productDetails}>
          <div className={styles.slider}>
            <Image
              src={fromImgToUrl(product.image)}
              alt="product"
              width={800}
              height={800}
            />
          </div>
          <div className={styles.details}>
            <h1 className={styles.title}>{product.name}</h1>
            <p className={styles.sDesc}>{product.s_desc}</p>
            <div className={styles.info}>
              <ul>
                <li>SKU: </li>
                <li>Stock: </li>
              </ul>
              <ul>
                <li>0X23B89</li>
                <li>In Stock</li>
              </ul>
              <ul>
                <li>Brand: </li>
                <li>Delivery: </li>
              </ul>
              <ul>
                <li>RFL</li>
                <li>in 2 days</li>
              </ul>
            </div>
            <div className={styles.middle}>
              <div className={styles.price}>
                <p className={styles.currPrice}>{product.price} USD</p>
                <p className={styles.oldPrice}>{product.old_price} USD</p>
              </div>
              <button className="btn btn-colored btn-s">Add to cart</button>
            </div>
            <button className={styles.wishListBtn}>
              <Image src="/icons/ic-actions-heart.svg" width={20} height={20} />
              Add to wish list
            </button>
            <p className={styles.desc}>Description</p>
            <p className={styles.lDesc}>{product.l_desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

export async function getStaticProps({ params: { slug } }) {
  const product_res = await fetch(`${API_URL}/products/?slug=${slug}`);
  const specificProduct = await product_res.json();

  return {
    props: {
      product: specificProduct[0],
    },
  };
}

export async function getStaticPaths() {
  // Retrive all the possible paths
  const products_res = await fetch(`${API_URL}/products`);
  const products = await products_res.json();

  // Return then to nextjs context
  return {
    paths: products.map((product) => ({
      params: { slug: String(product.slug) },
    })),
    fallback: false,
  };
}
