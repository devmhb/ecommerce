import React from "react";
import Link from "next/link";
import styles from "./categories.module.scss";

const Categories = () => {
  return (
    <div className={styles.categories}>
      <p className={styles.title}>Categories</p>
      <ul className={styles.items}>
        <li className={styles.item}>
          <Link href="/category/bakery">
            <a>Bakery</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/category/fruit">
            <a>Fruit and vegetables</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/category/meatandfish">
            <a>Meat and fish</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/category/drinks">
            <a>Drinks</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/category/kitchen">
            <a>Kitchen</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
