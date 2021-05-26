import Head from "next/head";
import ProductsContainer from "../components/ProductsContainer/ProductsContainer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ecommerce</title>
      </Head>
      <ProductsContainer />
    </>
  );
}
