import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
