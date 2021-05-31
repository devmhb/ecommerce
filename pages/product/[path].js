import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../styles/ProductDetails.module.scss";
import NavBar from "../../components/NavBar/NavBar";
import Image from "next/image";
import Footer from "../../components/Footer/Footer";
import products from "../../products.json";
import { fromImgToUrl } from "../../utils/urls";

const ProductDetails = () => {
  const router = useRouter();
  const { path } = router.query;

  const specificProduct = products.find((product) => product.slug === path);

  return (
    <>
      <Head>
        <title>{specificProduct.name}</title>
      </Head>
      <div className={styles.container}>
        <NavBar />
        <div className={styles.productDetails}>
          <div className={styles.slider}>
            <img src={fromImgToUrl(specificProduct.product_img)} />
          </div>
          <div className={styles.details}>
            <h1 className={styles.title}>{specificProduct.name}</h1>
            <p className={styles.sDesc}>{specificProduct.s_desc}</p>
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
                <p className={styles.currPrice}>{specificProduct.price} USD</p>
                <p className={styles.oldPrice}>
                  {specificProduct.old_price} USD
                </p>
              </div>
              <button className="btn btn-colored btn-s">Add to cart</button>
            </div>
            <button className={styles.wishListBtn}>
              <Image src="/icons/ic-actions-heart.svg" width={20} height={20} />
              Add to wish list
            </button>
            <p className={styles.desc}>Description</p>
            <p className={styles.lDesc}>{specificProduct.l_desc}</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductDetails;
