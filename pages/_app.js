import "../styles/globals.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* 헤더 */}
      <Header />

      {/* 컨텐츠들 */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
