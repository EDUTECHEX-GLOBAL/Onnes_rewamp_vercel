import React, { useEffect } from "react";
import Card from "../Card";
import FunFact from "../FunFact";
import Hero from "../Hero";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import Cta from "../Cta";
import LogoList from "../LogoList";
import MovingText from "../MovingText";
import PortfolioSlider from "../Slider/PortfolioSlider";
import PostSlider from "../Slider/PostSlider";
import TestimonialSlider from "../Slider/TestimonialSlider";
import TeamSlider from "../Slider/TeamSlider";
import VideoModal from "../VideoModal";
import TimelineSlider from "../Slider/TimelineSlider";
import { pageTitle } from "../../helper";
import "./Home.css";
import Button from "../Button";
import { useLocation } from "react-router-dom";
import ChatBot from "../ChatBot/ChatBot";
import { Helmet } from "react-helmet-async";
import Popup from "../Popup/Popup";

const funfaceData = [
  { title: "Global Happy Clients", factNumber: "20" },
  { title: "Project Completed", factNumber: "12" },
  { title: "Team Members", factNumber: "15" },
  { title: "Spin-off products", factNumber: "50" },
];

const portfolioData = [
  {
    title: "Deep Space Exploration",
    subtitle: "See Details",
    href: "/spaceportfolio#cryogenics",
    src: "/images/deepspace.png",
  },
  {
    title: "Liquid Space Fuels",
    subtitle: "See Details",
    href: "/spaceportfolio#thermal",
    src: "/images/Home_8.webp",
  },
  {
    title: "Hydrogen Powered Aviation",
    subtitle: "See Details",
    href: "/spaceportfolio#cryogenics",
    src: "/images/hydrogenpoweredaviation.jpg",
  },
  {
    title: "Green Shipping Oceans",
    subtitle: "See Details",
    href: "/spaceportfolio#underwater",
    src: "/images/greenshippingoceans.png",
  },
  {
    title: "Hydrogen Storage",
    subtitle: "See Details",
    href: "/spaceportfolio#carbon-fiber",
    src: "/images/hydrogenstorage.png",
  },
  {
    title: "Green CBG Storage",
    subtitle: "See Details",
    href: "/spaceportfolio#carbon-fiber",
    src: "/images/greenstorage.png",
  },
];

const capabilityIcons = [
  {
    icon: <img src="/images/icons/capability1.png" alt="Intelligent Orbital Infrastructure" />,
    label: "Intelligent Orbital\nInfrastructure",
  },
  {
    icon: <img src="/images/icons/capability2.png" alt="Autonomous Mission Systems" />,
    label: "Autonomous\nMission Systems",
  },
  {
    icon: <img src="/images/icons/capability3.png" alt="Lunar & Deep Space Logistics" />,
    label: "Lunar & Deep Space\nLogistics",
  },
  {
    icon: <img src="/images/icons/capability4.png" alt="Hypersonic & ISR Ecosystems" />,
    label: "Hypersonic & ISR\nEcosystems",
  },
];
export default function Home() {
  pageTitle("Home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title> Onnes - Next Generation Space Infrastructure</title>
        <meta
          name="description"
          content="Onnes develops advanced cryogenic tanks for aerospace, shipping, and hydrogen storage. Explore our expertise in design, simulation, and manufacturing."
        />
        <meta name="keywords" content="Cryogenics, Hydrogen Storage, Aerospace, Onnes Technology, Tank Manufacturing" />
        <link rel="canonical" href="https://onnes.in/" />
      </Helmet>

      {/* Start Hero Section */}
      <div className="hero-banner">
        <img
          src="/images/Home_banner.png"
          alt="Onnes Banner"
          className="hero-image"
        />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-heading">
              Engineering Tomorrow<br />
              <span className="hero-highlight">Beyond Boundaries.</span>
            </h1>
            <div className="hero-blue-line" />
            <p className="hero-subtext">
              Onnes Aerospace is engineering intelligent infrastructure
              systems for persistent orbital operations, lunar logistics,
              autonomous aerospace platforms, and next-generation
              deep-space missions.
            </p>
            <button className="hero-btn">
              EXPLORE OUR CAPABILITIES &nbsp;&gt;
            </button>
          </div>
        </div>

        {/* Bottom Capabilities Bar */}
        <div className="hero-capabilities-bar">
          {capabilityIcons.map((item, index) => (
            <div className="hero-capability-item" key={index}>
              <div className="hero-capability-icon">{item.icon}</div>
              <span className="hero-capability-label">
                {item.label.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* End Hero Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="Onnes thanks its partners , clients and investors for their continued support! " />
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