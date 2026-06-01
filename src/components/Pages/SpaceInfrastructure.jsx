// SpaceInfrastructure.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import Home from "./Home";

export default function SpaceInfrastructure() {
  return (
    <>
      <Helmet>
        <title>
          Space Infrastructure
        </title>

        <meta
          name="description"
          content="Building space infrastructure enabling humanity beyond Earth."
        />

        <link
          rel="canonical"
          href="https://onnes.in/space-infrastructure"
        />
      </Helmet>

      <Home />
    </>
  );
}