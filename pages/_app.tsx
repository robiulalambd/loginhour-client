import "@/styles/main.scss";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";
import type { NextComponentType, NextPageContext } from "next";
import { Provider } from "react-redux";
import store from "../redux/store";
type ComponentWithLayout = {
  getLayout?: (page: React.ReactNode) => JSX.Element;
} & NextComponentType<NextPageContext, any, AppProps["pageProps"]>;

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    setIsLoading(false);
  }, []);

  if ((Component as ComponentWithLayout).getLayout) {
    return (
      <Provider store={store}>
        {isLoading ? (
          <div className="preloader">
            <div className="preloader__img">
              <img src="/images/favicon.png" alt="image" />
            </div>
          </div>
        ) : null}
        <ThemeProvider enableSystem={false}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
  return (
    <Provider store={store}>
      <ThemeProvider enableSystem={false}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}
