import type { AppProps } from "next/app";
import GlobalStyle from "../src/styles/GlobalStyles";
import Router from "next/router";
import "nprogress/nprogress.css";
import * as NProgress from "nprogress";
import ContextBase from "../src/store/Context";
import ThemeProviderWrapper from "../src/theme/ThemeProvider";

Router.events.on("routeChangeStart", (url: any) => {
  console.log(url);
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextBase.Provider pageProps={pageProps}>
      <ThemeProviderWrapper>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProviderWrapper>
    </ContextBase.Provider>
  );
}
