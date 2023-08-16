import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { persistor, store } from "@/store";
import "@/styles/globals.css";
import { ChakraBaseProvider, Spinner, extendTheme } from "@chakra-ui/react";
import Head from "next/head";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#00A784",
      secondary: "#FF915B",
    },
  },
  fonts: {
    heading: `'TT Firs Neue Trl', sans-serif;`,
    body: `'TT Firs Neue Trl', sans-serif;`,
  },
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Spinner size={"10rem"} color="green" />}
        persistor={persistor}
      >
        <Head>
          <title>BRM</title>
        </Head>
        <ChakraBaseProvider theme={theme}>
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </ChakraBaseProvider>
      </PersistGate>
    </Provider>
  );
}
