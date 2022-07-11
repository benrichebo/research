import Head from "next/head";
import Script from "next/script";
import React from "react";

function Layout({children, title}) {
  return (
    <>
      <Head>
        <title>{title || "Research Institute"}</title>
        <meta
          name="description"
          content="An online POS system for retailers, shop owners and restaurants"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      {children}
      <Script src="/js/bootstrap.bundle.min.js" />
    </>
  );
}

export default Layout;
