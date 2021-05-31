import React from "react";
import Link from "next/link";
import styles from "./categories.module.scss";

const Categories = () => {
  return (
    <div className={styles.categories}>
      <p className={styles.title}>Categories</p>
      <ul className={styles.items}>
        <li className={styles.item}>
          <Link href="/category/one">
            <a>One</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/category/two">
            <a>Two</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/category/three">
            <a>Three</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/category/four">
            <a>Four</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/category/five">
            <a>Five</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
