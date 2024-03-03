import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import { ThemeProvider } from "../context/ThemeContext";
import "../styles/globals.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Tricia Chow</title>
			</Head>

			{/* <ThemeProvider> */}
			<Component {...pageProps} />
			{/* </ThemeProvider> */}
		</>
	);
}
