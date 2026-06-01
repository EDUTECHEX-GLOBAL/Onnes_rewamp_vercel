import React from "react";
import { Helmet } from "react-helmet-async";
import Home from "./Home";

export default function EngineeringTomorrow() {
  return (
    <>
      <Helmet>
        <title>
          Engineering Tomorrow Beyond Boundaries | Onnes Aerospace
        </title>

        <meta
          name="description"
          content="Onnes Aerospace is engineering intelligent infrastructure systems for persistent orbital operations, lunar logistics, autonomous aerospace platforms, and next-generation deep-space missions."
        />

        <meta
          name="keywords"
          content="Engineering Tomorrow, Onnes Aerospace, Space Infrastructure, Orbital Operations, Lunar Logistics, Deep Space Missions, Aerospace Engineering"
        />

        <meta
          property="og:title"
          content="Engineering Tomorrow Beyond Boundaries | Onnes Aerospace"
        />

        <meta
          property="og:description"
          content="Engineering intelligent infrastructure systems for orbital operations, lunar logistics, autonomous aerospace platforms, and deep-space missions."
        />

        <link
          rel="canonical"
          href="https://onnes.in/engineering-tomorrow"
        />
      </Helmet>

      <Home />
    </>
  );
}