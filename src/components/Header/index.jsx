import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import SocialWidget from "../Widget/SocialWidget";
import Newsletter from "../Widget/Newsletter";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import DropDown from "./DropDown";
import Div from "../Div";

import "./header.scss";

import logos from "../../../src/logos/OnnesLogo.png";

export default function Header({ variant }) {
  const location = useLocation();

  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);

  const ANN_HEIGHT = 62;
  const NAV_HEIGHT = 90;

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (location.pathname === "/technology" && params.get("focus") === "space") {
      const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
      };
      scrollToSection("cryogenics");
      setTimeout(() => scrollToSection("thermal"), 600);
    }
  }, [location]);

  const totalFixedHeight = ANN_HEIGHT + NAV_HEIGHT;
  const closeMobileMenu = () => setMobileToggle(false);

  return (
    <>
      <div className="cs-fixed_top_wrapper">

        {/* ── Announcement Bar ── */}
        <div className="cs-ann_bar">

          {/* COL 1: rocket icon — visible on desktop only */}
          <div className="cs-ann_col1">
            <img src="/images/icons/rocket.png" alt="rocket" className="cs-ann_rocket_icon" />
          </div>

          {/* COL 2: rocket (mobile only) + title inline */}
          <div className="cs-ann_col2">
            <img src="/images/icons/rocket.png" alt="rocket" className="cs-ann_rocket_icon cs-ann_rocket_mobile" />
            <span className="cs-ann_title">WEBSITE UNDER TRANSFORMATION</span>
          </div>

          {/* COL 3: subtitle */}
          <div className="cs-ann_col3">
            <span className="cs-ann_sub">Building the infrastructure for humanity&apos;s deep space future.</span>
          </div>

          {/* COL 4: globe + launch text */}
          <div className="cs-ann_col4">
            <img src="/images/icons/globe.png" alt="globe" className="cs-ann_icon" />
            <span className="cs-ann_launch">Our new website launches in 4–6 weeks.</span>
          </div>

        </div>

        {/* ── Navbar ── */}
        <header
          className={`cs-site_header cs-style1 text-uppercase ${variant || ""} ${
            isSticky ? "cs-sticky_header_active" : ""
          }`}
        >
          <Div className="cs-main_header">
            <Div className="container">
              <Div className="cs-main_header_in">

                <Div className="cs-main_header_left">
                  <Link className="cs-site_branding" to="/">
                    <img src={logos} alt="Onnes Logo" />
                  </Link>
                </Div>

                <Div className="cs-main_header_center">
                  <Div className="cs-nav cs-primary_font cs-medium">
                    <ul className="cs-nav_list" style={{ display: mobileToggle ? "block" : "" }}>

                      <li>
                        <Link to="/" onClick={closeMobileMenu}>Aerospace</Link>
                      </li>

                      <li>
                        <Link to="/" onClick={closeMobileMenu}>Capabilities</Link>
                      </li>

                      {/* Technologies — no dropdown, stays on home page */}
                      <li>
                        <a
                          href="#"
                          onClick={(e) => { e.preventDefault(); closeMobileMenu(); }}
                          style={{ cursor: "pointer" }}
                        >
                          Technologies
                        </a>
                      </li>

                      {/* About Us — stays on home page */}
                      <li>
                        <a
                          href="#"
                          onClick={(e) => { e.preventDefault(); closeMobileMenu(); }}
                          style={{ cursor: "pointer" }}
                        >
                          About Us
                        </a>
                      </li>

                      <li>
                        <NavLink to="/contact" onClick={closeMobileMenu}>Contact</NavLink>
                      </li>

                    </ul>

                    <span
                      className={mobileToggle ? "cs-munu_toggle cs-toggle_active" : "cs-munu_toggle"}
                      onClick={() => setMobileToggle(!mobileToggle)}
                    >
                      <span></span>
                    </span>
                  </Div>
                </Div>

                <Div className="cs-main_header_right">
                  <Div className="cs-toolbox">
                    <span className="cs-icon_btn" onClick={() => setSideHeaderToggle(!sideHeaderToggle)}>
                      <span className="cs-icon_btn_in">
                        <span /><span /><span /><span />
                      </span>
                    </span>
                  </Div>
                </Div>

              </Div>
            </Div>
          </Div>
        </header>

      </div>

      {/* Spacer */}
      <div style={{ height: `${totalFixedHeight}px` }} />

      {/* Side Drawer */}
      <Div className={sideHeaderToggle ? "cs-side_header active" : "cs-side_header"}>
        <button className="cs-close" onClick={() => setSideHeaderToggle(false)} />
        <Div className="cs-side_header_overlay" onClick={() => setSideHeaderToggle(false)} />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link className="cs-site_branding" to="/"><img src={logos} alt="Onnes Logo" /></Link>
          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">Do you have a project in your <br /> mind? Keep connect us.</h2>
          </Div>
          <Div className="cs-side_header_box"><ContactInfoWidget title="Contact Us" withIcon /></Div>
          <Div className="cs-side_header_box">
            <Newsletter title="Subscribe" subtitle="Subscribe to our newsletters to get the latest news and updates" placeholder="example@gmail.com" />
          </Div>
          <Div className="cs-side_header_box"><SocialWidget /></Div>
        </Div>
      </Div>
    </>
  );
}