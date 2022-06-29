import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import { SSRKeycloakProvider, SSRCookies } from "@react-keycloak/ssr";
import cookie from "cookie";

// const keycloakCfg = {
//   url: "http://localhost:8080/auth",
//   realm: "authentication_with_keyclock",
//   clientId: "keyclock_demo",
// };

function MyApp({ Component, pageProps, cookies }) {
  return (
    <>
      {/* <SSRKeycloakProvider
        keycloakConfig={keycloakCfg}
        persistor={SSRCookies(cookies)}
      > */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
      {/* </SSRKeycloakProvider> */}
    </>
  );
}

function parseCookies(req) {
  if (!req || !req.headers) {
    return {};
  }
  return cookie.parse(req.headers.cookie || "");
}

MyApp.getInitialProps = async (context) => {
  // Extract cookies from AppContext
  return {
    cookies: parseCookies(context?.ctx?.req),
  };
};

export default MyApp;
