import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.col}>
        <h4 className={styles.title}>Get in touch</h4>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="">
              <a>About</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="">
              <a>Careers</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="">
              <a>Press Releases</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.col}>
        <h4 className={styles.title}>Get in touch</h4>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="">
              <a>About</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="">
              <a>Careers</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="">
              <a>Press Releases</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.col}>
        <h4 className={styles.title}>Get in touch</h4>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="">
              <a>About</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="">
              <a>Careers</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="">
              <a>Press Releases</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.col}>
        <h4 className={styles.title}>Get in touch</h4>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="">
              <a>About</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="">
              <a>Careers</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="">
              <a>Press Releases</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </div>
      <p className={styles.copyright}>Copyright © 2020 Ecommerce</p>
    </footer>
  );
};

export default Footer;
