import React from 'react'
import Banner from '../Banner/Banner'
import styles from "./bannersContainer.module.scss"

const BannersContainer = () => {
  return (
    <div className={styles.bannersContainer}>
      <Banner />
      <Banner />
    </div>
  )
}

export default BannersContainer
