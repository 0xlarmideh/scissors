import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/features.scss";
import "../styles/footer.scss";
import "../styles/faqs.scss";
import "../styles/header.scss";
import "../styles/navbar.scss";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";


export default function MyApp({

  
  Component,
  pageProps,
}: {
  Component: React.ComponentType;
  pageProps: any;
}) {
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createPagesBrowserClient());
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <ChakraProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </ChakraProvider>
    </SessionContextProvider>
  );
}
