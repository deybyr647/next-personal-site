import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
  router,
}: AppProps) => {
  const pageTransition = {
    type: "spring",
    damping: 10,
    stiffness: 100,
    when: "afterChildren",
    duration: 3,
  };

  return (
    <AnimatePresence>
      <div>
        <motion.div
          transition={pageTransition}
          key={router.pathname}
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <SessionProvider session={session}>
            <Component {...pageProps} key={router.pathname} />
          </SessionProvider>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default MyApp;
