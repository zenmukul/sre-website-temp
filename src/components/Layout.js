import React from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, title, description, isHomePage }) => {
  return (
    <React.Fragment>
      <Head>
        <title>
          {title
            ? `${title} | Site Reliability Engineering`
            : 'Site Reliability Engineering'}
        </title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full">
        <Header isHomePage={isHomePage} />
        <div className="flex flex-col justify-center items-center">
          {children}
        </div>
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default Layout;
