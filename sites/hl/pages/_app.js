import '@globals/styles/index.scss';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { SharedSiteHead } from '@globals/components';
import { TagularClick, TagularViewed } from '@libs/tagular/events';
import { Header, Footer } from '../components';

function MyApp({ Component, pageProps }) {
  // Tagular setup: only fires once
  useEffect(() => {
    TagularClick();
    TagularViewed();
  }, []);

  return (
    <>
      <SharedSiteHead site="hl" />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.any,
};

export default MyApp;
