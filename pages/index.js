import Head from "next/head";
import BannersContainer from "../components/BannersContainer/BannersContainer";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import ProductsContainer from "../components/ProductsContainer/ProductsContainer";
import styles from "../styles/Home.module.scss";
import products from "../products.json";
import Link from "next/link";

export default function Home() {
  const categories = [];
  products.map((product) => {
    const category = product.category;
    if (!categories.includes(category)) {
      categories.push(category);
    }
  });

  const featuredProducts = products.filter((product) => product.featured);

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

        <h4 className={styles.title}>Best Selling Products</h4>
        <ProductsContainer featured={true} />

        {categories.map((category) => (
          <div key={category}>
            <Link href={`/category/${category}`}>
              <h4 className={styles.title}>{category}</h4>
            </Link>
            <ProductsContainer category={category} />
          </div>
        ))}
        <Footer />
      </div>
    </>
  );
}
