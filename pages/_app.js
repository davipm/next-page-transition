import React from 'react';
import { AnimatePresence } from 'framer-motion'

import '../styles/styles.scss';

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  )
}

export default MyApp;
