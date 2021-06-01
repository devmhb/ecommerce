import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import "../styles/globals.scss";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </UserProvider>
  );
}

export default MyApp;
