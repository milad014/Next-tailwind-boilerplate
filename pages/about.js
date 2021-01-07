import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

const Home = () => (
  <div className="text-sans">
    <Head>
      <title>About</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="w-full text-gray-900">
    </div>
  </div>
);

export default Home;
