import React from 'react'
import styles from "./banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <p className={styles.subTitle}>Banner subfocus</p>
      <h2 className={styles.title}>Space for heading</h2>
      <button className="btn btn-stroke btn-m">Read recepies</button>
    </div>
  )
}

export default Banner
