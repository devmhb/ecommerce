import React from "react";
import Image from "next/image";
import styles from "./quoteCard.module.scss";

const QuoteCard = () => {
  return (
    <div className={styles.quoteCard}>
      <h4 className={styles.msg}>
        “ This is an super space for your customers qoute. Don’t worry it works
        smooth as pie. You will get all what you need by writiing a text here “
      </h4>
      <p className={styles.name}>Name and Surname</p>
      <div className={styles.clientImg}>
        <Image
          src="/macbook.jpeg"
          width={300}
          height={300}
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default QuoteCard;
