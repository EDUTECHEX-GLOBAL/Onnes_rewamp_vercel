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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import Button from "../Button"; // Add this import with your other imports
import { useLocation } from "react-router-dom";
import ChatBot from "../ChatBot/ChatBot";
import { Helmet } from "react-helmet-async";
import Popup from "../Popup/Popup";


const heroImages = [
  "/images/Home_1.webp",
  "/images/Home_2.webp",
  "/images/Home_3.webp",
  "/images/Home_4.webp",
  "/images/Home_5.webp",
  "/images/Home_6.webp",
  "/images/Home_7.webp",
];
// Hero Social Links
const heroSocialLinks = [
  {
    name: "Behance",
    links: "/",
  },
  {
    name: "Twitter",
    links: "/",
  },
];

// FunFact Data
const funfaceData = [
  {
    title: "Global Happy Clients",
    factNumber: "20",
  },
  {
    title: "Project Completed",
    factNumber: "12",
  },
  {
    title: "Team Members",
    factNumber: "15",
  },
  {
    title: "Spin-off products",
    factNumber: "50",
  },
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
    href: "/spaceportfolio#thermal",  // Changed from cryogenics to thermal
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

  const sliderSettings = {
    dots: false, // Hides dots for a cleaner look
    infinite: true, // Ensures looping
    speed: 1000, // Smooth transition speed
    slidesToShow: 1, // Shows one image at a time
    slidesToScroll: 1, // Scrolls one image at a time
    autoplay: true, // Enables automatic sliding
    autoplaySpeed: 2500, // Adjusts speed for a natural feel
    pauseOnHover: false, // Prevents pausing when hovered
    swipeToSlide: true, // Allows smooth swiping
    arrows: false, // Hides arrows for a cleaner look
    cssEase: "ease-in-out", // Ensures smooth easing
  };

  return (
    <>
    <Helmet>
    <title>Onnes - Next Generation Cryogenic Tank Technology</title>
    <meta
      name="description"
      content="Onnes develops advanced cryogenic tanks for aerospace, shipping, and hydrogen storage. Explore our expertise in design, simulation, and manufacturing."
    />
    <meta name="keywords" content="Cryogenics, Hydrogen Storage, Aerospace, Onnes Technology, Tank Manufacturing" />
    <link rel="canonical" href="https://onnes.in/" />
  </Helmet>
  
      {/* Start Hero Section */}
      <div className="hero-slider">
        <Slider {...sliderSettings}>
          {heroImages.map((image, index) => (
            <div key={index} className="hero-slide-wrapper">
              <img
                src={image}
                alt={`Hero ${index + 1}`}
                className="hero-image"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* End Hero Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End Team Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="Onnes thanks its partners , clients and investors for their continued support! " />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      <Div className="container" id="partners">
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let’s discuss to make <br /> ultra <i>cool</i> and <i>light</i> tanks integrated with bespoke cryogenic systems"
          btnText="Contact Us"
          btnLink="/contact#contact-form"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>

      {/* End CTA Section */}
      {/* ChatBot Component */}
      <ChatBot />
      {/* Popup Component */}
      <Popup />
    </>
  );
}