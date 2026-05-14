import React, { useEffect } from "react";
import Div from "../Div";
import Spacing from "../Spacing";
import LogoList from "../LogoList";
import MovingText from "../MovingText";
import ChatBot from "../ChatBot/ChatBot";
import { Helmet } from "react-helmet-async";
import Popup from "../Popup/Popup";

import "./Home.css";

const portfolioData = [
  {
    title: "Intelligent Orbital Infrastructure",
    subtitle: "See Details",
    href: "/#orbital-infrastructure",
    src: "/images/deepspace.png",
  },
  {
    title: "Autonomous Mission Systems",
    subtitle: "See Details",
    href: "/#mission-systems",
    src: "/images/Home_8.webp",
  },
  {
    title: "Lunar Operations",
    subtitle: "See Details",
    href: "/#lunar-logistics",
    src: "/images/hydrogenpoweredaviation.jpg",
  },
  {
    title: "Deep Space Logistics",
    subtitle: "See Details",
    href: "/#lunar-logistics",
    src: "/images/greenshippingoceans.png",
  },
  {
    title: "Hypersonic Systems",
    subtitle: "See Details",
    href: "/#hypersonic-isr",
    src: "/images/hydrogenstorage.png",
  },
  {
    title: "ISR Aerospace Networks",
    subtitle: "See Details",
    href: "/#hypersonic-isr",
    src: "/images/greenstorage.png",
  },
];

const capabilityIcons = [
  {
    icon: (
      <img
        src="/images/icons/capability1.png"
        alt="Intelligent Orbital Infrastructure"
      />
    ),
    label: "Intelligent Orbital\nInfrastructure",
  },
  {
    icon: (
      <img
        src="/images/icons/capability2.png"
        alt="Autonomous Mission Systems"
      />
    ),
    label: "Autonomous\nMission Systems",
  },
  {
    icon: (
      <img
        src="/images/icons/capability3.png"
        alt="Lunar & Deep Space Logistics"
      />
    ),
    label: "Lunar & Deep Space\nLogistics",
  },
  {
    icon: (
      <img
        src="/images/icons/capability4.png"
        alt="Hypersonic & ISR Ecosystems"
      />
    ),
    label: "Hypersonic & ISR\nEcosystems",
  },
];

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

  return (
    <>
      <Helmet>
        <title>
          Onnes - Building Space Infrastructure Enabling Humanity Beyond Earth
        </title>

        <meta
          name="description"
          content="Onnes Aerospace is engineering intelligent infrastructure systems for persistent orbital operations, lunar logistics, autonomous aerospace platforms, and next-generation deep-space missions."
        />

        <meta
          name="keywords"
          content="Onnes Aerospace, Space Infrastructure, Orbital Systems, Lunar Logistics, Deep Space Missions, Autonomous Aerospace Platforms, Hypersonic Systems, ISR Systems, Space Engineering"
        />

        <meta
          property="og:title"
          content="Onnes - Building Space Infrastructure Enabling Humanity Beyond Earth"
        />

        <meta
          property="og:description"
          content="Engineering intelligent infrastructure systems for orbital operations, lunar logistics, autonomous aerospace platforms, and deep-space missions."
        />

        <meta property="og:url" content="https://onnes.in/" />

        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="Onnes - Building Space Infrastructure Enabling Humanity Beyond Earth"
        />

        <meta
          name="twitter:description"
          content="Onnes Aerospace develops intelligent orbital infrastructure, autonomous mission systems, lunar logistics, and next-generation aerospace technologies."
        />

        <link rel="canonical" href="https://onnes.in/" />
      </Helmet>

      {/* Start Hero Section */}
      <div
        className="hero-banner"
        id="space-infrastructure"
      >
        <img
          src="/images/Home_banner.png"
          alt="Onnes Aerospace Banner"
          className="hero-image"
        />

        <div className="hero-overlay">
          <div
            className="hero-content"
            id="engineering-tomorrow"
          >
            <h1 className="hero-heading">
              Engineering Tomorrow
              <br />

              <span className="hero-highlight">
                Beyond Boundaries.
              </span>
            </h1>

            <div className="hero-blue-line" />

            <p className="hero-subtext">
              Onnes Aerospace is engineering intelligent
              infrastructure systems for persistent orbital
              operations, lunar logistics, autonomous aerospace
              platforms, and next-generation deep-space missions.
            </p>

            <button className="hero-btn">
              EXPLORE OUR CAPABILITIES &nbsp;&gt;
            </button>
          </div>
        </div>

        {/* Bottom Capabilities Bar */}
        <div className="hero-capabilities-bar">
          {capabilityIcons.map((item, index) => {
            const ids = [
              "orbital-infrastructure",
              "mission-systems",
              "lunar-logistics",
              "hypersonic-isr",
            ];

            return (
              <div
                className="hero-capability-item"
                key={index}
                id={ids[index]}
              >
                <div className="hero-capability-icon">
                  {item.icon}
                </div>

                <span className="hero-capability-label">
                  {item.label
                    .split("\n")
                    .map((line, i) => (
                      <span key={i}>
                        {line}
                        {i === 0 && <br />}
                      </span>
                    ))}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      {/* End Hero Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />

      <MovingText text="Onnes thanks its partners, clients and investors for their continued support!" />

      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      <Div className="container" id="partners">
        <LogoList />
      </Div>
      {/* End LogoList Section */}

      {/* ChatBot Component */}
      <ChatBot />

      {/* Popup Component */}
      <Popup />
    </>
  );
}