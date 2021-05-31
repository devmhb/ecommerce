import React from "react";
import Head from "next/head";
import NavBar from "../../components/NavBar/NavBar";
import styles from "../../styles/Account.module.scss";

const Account = () => {
  return (
    <>
      <Head>
        <title>Account</title>
      </Head>
      <div className={styles.account}>
        <NavBar />
        <h1>Account</h1>
      </div>
    </>
  );
};

export default Account;
