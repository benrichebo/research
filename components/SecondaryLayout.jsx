import Head from "next/head";
import Script from "next/script";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function SecondaryLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title || "Research"}</title>
        <meta
          name="description"
          content="
A website for a research organization with stripe payment system"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Header />
      {children}
      <Footer />
      <Script src="/js/bootstrap.bundle.min.js" />
    </>
  );
}

export default SecondaryLayout;
