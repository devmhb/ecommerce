import Head from "next/head";
import BannersContainer from "../components/BannersContainer/BannersContainer";
import Categories from "../components/Categories/Categories";
import ProductsContainer from "../components/ProductsContainer/ProductsContainer";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import { API_URL } from "../utils/urls";
import { useUser } from "@auth0/nextjs-auth0";

export default function Home({ products, categories }) {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <Head>
        <title>Ecommerce</title>
      </Head>
      <div className={styles.container}>
        {/* <NavBar /> */}
        <div className={styles.header}>
          <Categories categories={categories} />
          <BannersContainer />
        </div>

        <h4 className={styles.title}>Best Selling Products</h4>
        <ProductsContainer
          products={products.filter((product) => product.featured === true)}
        />

        {categories.map((category) => (
          <div key={category.id}>
            <Link href={`/category/${category.slug}`}>
              <h4 className={styles.title}>{category.name}</h4>
            </Link>
            {<ProductsContainer products={category.products} />}
          </div>
        ))}
        {/* <Footer /> */}
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Fetch the produtcs and categories
  const products_res = await fetch(`${API_URL}/products`);
  const products = await products_res.json();

  const categories_res = await fetch(`${API_URL}/categories`);
  const categories = await categories_res.json();

  // Return the produtcs as props
  return {
    props: {
      products,
      categories,
    },
  };
}
