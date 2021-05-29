import React from "react";
import styles from "./navBar.module.scss";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.upper}>
        <div className={styles.left}>
          <p className={styles.phone}>+420 336 775 664</p>
          <p className={styles.mail}>info@freshnesecom.com</p>
        </div>
        <div className={styles.right}>
          <Link href="/blog">
            <a className={styles.link}>Blog</a>
          </Link>
          <Link href="/about">
            <a className={styles.link}>About</a>
          </Link>
          <Link href="/contact">
            <a className={styles.link}>Contact</a>
          </Link>
        </div>
      </div>
      <div className={styles.middle}>
        <Link href="/">
          <a className={styles.logo}>AMAZON</a>
        </Link>
        <div className={styles.search}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search Products, categories ..."
          />
        </div>
        <div className={styles.navIcons}>
          <div className={styles.icon}>
            <Link href="">
              <Image src="/icons/ic-actions-user.svg" width={25} height={25} />
            </Link>
          </div>
          <div className={styles.icon}>
            <Link href="">
              <Image
                src="/icons/ic-ecommerce-basket.svg"
                width={30}
                height={30}
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
