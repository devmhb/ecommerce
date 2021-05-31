import React from "react";
import Head from "next/head";
import styles from "../../styles/Contact.module.scss";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className={styles.contact}>
        <h1>Contact</h1>
      </div>
    </>
  );
};

export default Contact;
