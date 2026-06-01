import React from "react";
import { Helmet } from "react-helmet-async";
import Home from "./Home";

export default function HypersonicISR() {
  return (
    <>
      <Helmet>
        <title>Hypersonic & ISR Systems</title>

        <meta
          name="description"
          content="Mission-critical systems supporting next-generation aerospace defense networks, hypersonic technologies, intelligence, surveillance, and reconnaissance operations."
        />

        <meta
          name="keywords"
          content="Hypersonic Systems, ISR Systems, Aerospace Defense, Surveillance Systems, Reconnaissance Systems"
        />

        <meta
          property="og:title"
          content="Hypersonic & ISR Systems"
        />

        <meta
          property="og:description"
          content="Mission-critical systems for next-generation aerospace defense networks."
        />

        <meta
          property="og:url"
          content="https://onnes.in/hypersonic-isr"
        />

        <meta property="og:type" content="website" />

        <link
          rel="canonical"
          href="https://onnes.in/hypersonic-isr"
        />
      </Helmet>

      <Home />
    </>
  );
}