import React from "react";
import { Helmet } from "react-helmet-async";
import Home from "./Home";

export default function OrbitalInfrastructure() {
  return (
    <>
      <Helmet>
        <title>Intelligent Orbital Infrastructure</title>

        <meta
          name="description"
          content="Persistent systems engineered for continuous operations beyond Earth. Onnes Aerospace develops intelligent orbital infrastructure enabling next-generation aerospace missions."
        />

        <meta
          name="keywords"
          content="Orbital Infrastructure, Space Infrastructure, Orbital Operations, Deep Space Missions, Aerospace Engineering"
        />

        <meta
          property="og:title"
          content="Intelligent Orbital Infrastructure"
        />

        <meta
          property="og:description"
          content="Persistent systems engineered for continuous operations beyond Earth."
        />

        <meta
          property="og:url"
          content="https://onnes.in/orbital-infrastructure"
        />

        <meta property="og:type" content="website" />

        <link
          rel="canonical"
          href="https://onnes.in/orbital-infrastructure"
        />
      </Helmet>

      <Home />
    </>
  );
}