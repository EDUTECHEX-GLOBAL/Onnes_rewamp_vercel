import React from "react";
import { Helmet } from "react-helmet-async";
import Home from "./Home";

export default function MissionSystems() {
  return (
    <>
      <Helmet>
        <title>Autonomous Mission Systems</title>

        <meta
          name="description"
          content="Integrated controls, telemetry systems, and adaptive aerospace platforms enabling autonomous mission execution for next-generation space operations."
        />

        <meta
          name="keywords"
          content="Autonomous Mission Systems, Telemetry Systems, Aerospace Platforms, Space Missions"
        />

        <meta
          property="og:title"
          content="Autonomous Mission Systems"
        />

        <meta
          property="og:description"
          content="Integrated controls, telemetry systems, and adaptive aerospace platforms for autonomous mission execution."
        />

        <meta
          property="og:url"
          content="https://onnes.in/mission-systems"
        />

        <meta property="og:type" content="website" />

        <link
          rel="canonical"
          href="https://onnes.in/mission-systems"
        />
      </Helmet>

      <Home />
    </>
  );
}