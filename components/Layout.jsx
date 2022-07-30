import Head from "next/head";
import Script from "next/script";
import React from "react";

function Layout({children, title}) {
  return (
    <>
      <Head>
        <title>{title || "Association of researches and planners"}</title>
        <meta
          name="description"
          content="Research individuals and professionals in the built environment"
        />
        <link rel="icon" href="/logo.ico" />
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
