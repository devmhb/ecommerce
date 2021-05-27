import Head from "next/head";
import BannersContainer from "../components/BannersContainer/BannersContainer";
import NavBar from "../components/NavBar/NavBar";
import ProductsContainer from "../components/ProductsContainer/ProductsContainer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ecommerce</title>
      </Head>
      <NavBar />
      <ProductsContainer />
      <BannersContainer />
    </>
  );
}
