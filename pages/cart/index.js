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
        <div className={styles.wrapper}>
          <div className={styles.cartItems}>
            <div className={styles.text}>
              <p className={styles.title}>Shopping Cart</p>
              <p className={styles.title}>3 Items</p>
            </div>
            <div className={styles.items}>
              <OrderedProduct />
              <OrderedProduct />
              <OrderedProduct />
            </div>
          </div>
          <div className={styles.cartTotal}>
            <p className={styles.title}>Order Summary</p>
            <div className={styles.subTotal}>
              <p className={styles.text}>Subtoal(5 items)</p>
              <p className={styles.price}>$356.00</p>
            </div>
            <div className={styles.shipping}>
              <p className={styles.text}>Shipping Cost</p>
              <p className={styles.price}>$356.00</p>
            </div>
            <div className={styles.total}>
              <p className={styles.text}>Total</p>
              <p className={styles.price}>$356.00</p>
            </div>
            <button
              className="btn btn-stroke btn-s"
              style={{ display: "block", width: "100%" }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
