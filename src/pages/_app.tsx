import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { setCookie } from "nookies";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const appToken = router?.query?.token as string;

  useEffect(() => {
    if (appToken) {
      setCookie(null, "token", appToken, {
        // httpOnly: true,
      });
    }
  }, [appToken]);
  return <Component {...pageProps} />;
}
