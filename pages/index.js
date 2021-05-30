import Head from "next/head";
import BannersContainer from "../components/BannersContainer/BannersContainer";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import ProductsContainer from "../components/ProductsContainer/ProductsContainer";
import QuoteCard from "../components/QuoteCard/QuoteCard";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ecommerce</title>
      </Head>
      <div className={styles.container}>
        <NavBar />
        <div className={styles.header}>
          <Categories />
          <BannersContainer />
        </div>
        <h4 className={styles.title}>Best selling products</h4>
        <ProductsContainer category="one" />
        <h4 className={styles.title}>Best from Farmers</h4>
        <ProductsContainer category="five" />
        <h4 className={styles.title}>Digital Goods</h4>
        <ProductsContainer category="two" />
        {/* <QuoteCard /> */}
        <Footer />
      </div>
    </>
  );
}
