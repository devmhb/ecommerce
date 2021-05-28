import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "./productDetails.module.scss";
import NavBar from "../../components/NavBar/NavBar";
import Image from "next/image";
import Footer from "../../components/Footer/Footer";

const ProductDetails = () => {
  const router = useRouter();
  const { pId } = router.query;

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
            <table className={styles.info}>
              <tr>
                <td>SKU:</td>
                <td>0X23B89</td>
                <td>Brand</td>
                <td>Pran</td>
              </tr>
              <tr>
                <td>Stock</td>
                <td>In Stock</td>
                <td>Delivery</td>
                <td>in 2 days</td>
              </tr>
            </table>
            <div className={styles.middle}>
              <div className={styles.price}>
                <p className={styles.currPrice}>39 USD</p>
                <p className={styles.oldPrice}>45 USD</p>
              </div>
              <button className="btn btn-colored btn-s">Add to cart</button>
            </div>
            <div className={styles.wishList}>
              <button className="btn btn-simple btn-s">Add to wish list</button>
            </div>
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
