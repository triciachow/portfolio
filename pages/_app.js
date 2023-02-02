import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import { ThemeProvider } from "../context/ThemeContext";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <Layout>
          <Navbar />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
