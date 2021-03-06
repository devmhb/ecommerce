import React from 'react';
import { useRouter } from "next/router"
import Head from "next/head";
import styles from "./category.module.scss"
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar'

const Category = () => {
    const router = useRouter();
    const { category } = router.query;

    return (
        <>
        <Head>
            <title>{category}</title>
        </Head>
        <div className={styles.category}>
            <NavBar />
            <header className={styles.header}>
                <h1>Category</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate adipisci dolorem itaque corrupti aperiam accusamus dicta ex doloremque iste quam.</p>
            </header>
            <ProductsContainer />
            <Footer />
        </div>
        </>
    )
}

export default Category
