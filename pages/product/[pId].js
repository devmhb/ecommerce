import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../styles/ProductDetails.module.scss";
import NavBar from "../../components/NavBar/NavBar";
import Image from "next/image";
import Footer from "../../components/Footer/Footer";

const ProductDetails = () => {
  const router = useRouter();
  const { pId } = router.query;
  console.log(pId);
  return (
    <>
      <Head>
        <title>Ecommerce Product Details</title>
      </Head>
      <div className={styles.container}>
        <NavBar />
        <dev className={styles.productDetails}>
          <div className={styles.slider}>
            <Image src="/macbook.jpeg" width={500} height={500} />
          </div>
          <div className={styles.details}>
            <h1 className={styles.title}>Carrots from Tomissy Farm</h1>
            <p className={styles.sDesc}>
              Carrots from Tomissy Farm are one of the best on the market.
              Tomisso and his family are giving a full love to his Bio products.
              Tomisso’s carrots are growing on the fields naturally.
            </p>
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
                <p className={styles.currPrice}>39 USD</p>
                <p className={styles.oldPrice}>45 USD</p>
              </div>
              <button className="btn btn-colored btn-s">Add to cart</button>
            </div>
            <button className={styles.wishListBtn}>
              <Image src="/icons/ic-actions-heart.svg" width={20} height={20} />
              Add to wish list
            </button>
            <p className={styles.desc}>Description</p>
            <p className={styles.lDesc}>
              We work hard to ensure that the fruit and vegetables we sell are
              fresh and high in quality. If we don’t grow them ourselves, we
              source them from carefully chosen suppliers, preferring to buy
              locally whenever possible.
            </p>
          </div>
        </dev>
        <Footer />
      </div>
    </>
  );
};

export default ProductDetails;
