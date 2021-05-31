import React from "react";
import Head from "next/head";
import styles from "../../styles/About.module.scss";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className={styles.about}>
        <h1>About</h1>
      </div>
    </>
  );
};

export default About;
