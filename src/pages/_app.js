import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import "@/styles/globals.css";
import {  ChakraBaseProvider, extendTheme } from "@chakra-ui/react";

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
    <ChakraBaseProvider theme={theme}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ChakraBaseProvider>
  );
}
