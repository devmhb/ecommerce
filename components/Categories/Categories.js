import React from "react";
import Link from "next/link";
import styles from "./categories.module.scss";

const Categories = ({ categories }) => {
  return (
    <div className={styles.categories}>
      <p className={styles.title}>Categories</p>
      <ul className={styles.items}>
        {categories.map((category) => (
          <li key={category.id} className={styles.item}>
            <Link href={`/category/${category.slug}`}>
              <a>{category.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
