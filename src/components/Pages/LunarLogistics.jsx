import React from "react";
import { Helmet } from "react-helmet-async";
import Home from "./Home";

export default function LunarLogistics() {
  return (
    <>
      <Helmet>
        <title>Lunar & Deep Space Logistics</title>

        <meta
          name="description"
          content="Infrastructure enabling long-duration orbital and lunar operations through intelligent logistics systems, mission planning, and deep-space support technologies."
        />

        <meta
          name="keywords"
          content="Lunar Logistics, Deep Space Logistics, Space Infrastructure, Lunar Missions"
        />

        <meta
          property="og:title"
          content="Lunar & Deep Space Logistics"
        />

        <meta
          property="og:description"
          content="Infrastructure enabling long-duration orbital and lunar operations."
        />

        <meta
          property="og:url"
          content="https://onnes.in/lunar-logistics"
        />

        <meta property="og:type" content="website" />

        <link
          rel="canonical"
          href="https://onnes.in/lunar-logistics"
        />
      </Helmet>

      <Home />
    </>
  );
}