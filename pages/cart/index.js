import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import OrderedProduct from "../../components/OrderedProduct/OrderedProduct";
import styles from "../../styles/Cart.module.scss";
import Head from "next/head";

const Cart = () => {
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <div className={styles.cart}>
        <NavBar />
        <OrderedProduct />
      </div>
    </>
  );
};

export default Cart;
