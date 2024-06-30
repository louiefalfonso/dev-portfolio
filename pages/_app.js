import MainState from "@/src/Context";
import PreLoader from "@/src/layout/PreLoader";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <MainState>
      <PreLoader />
      <Component {...pageProps} />
    </MainState>
  );
}
