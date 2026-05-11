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
  const [annVisible, setAnnVisible] = useState(true);

  const ANN_HEIGHT = 62;
  const NAV_HEIGHT = 90;

  // Sticky Header
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Auto scroll for technology page sections
  useEffect(() => {
    const params = new URLSearchParams(location.search);

    if (
      location.pathname === "/technology" &&
      params.get("focus") === "space"
    ) {
      const scrollToSection = (id) => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };

      scrollToSection("cryogenics");

      setTimeout(() => {
        scrollToSection("thermal");
      }, 600);
    }
  }, [location]);

  const totalFixedHeight =
    (annVisible ? ANN_HEIGHT : 0) + NAV_HEIGHT;

  const closeMobileMenu = () => {
    setMobileToggle(false);
  };

  return (
    <>
      {/* Fixed Wrapper */}
      <div className="cs-fixed_top_wrapper">

        {/* Announcement Bar */}
        {annVisible && (
          <div className="cs-ann_bar">

            {/* Left */}
            <div className="cs-ann_left">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                style={{ flexShrink: 0 }}
              >
                <path
                  d="M4.5 16.5C3 18 3 21 3 21s3 0 4.5-1.5c.83-.83.83-2.17 0-3-.83-.83-2.17-.83-3 0z"
                  fill="#3B82F6"
                />
                <path
                  d="M12 2C7 2 4 8 4 8l4 4 4 4s6-3 6-8c0-3.31-2.69-6-6-6z"
                  fill="#3B82F6"
                />
                <path
                  d="M8 12 4 8S2 10 2 13c0 1.1.9 2 2 2l4-3z"
                  fill="#1D4ED8"
                />
                <path
                  d="M12 16l4 4s2-2 2-5c0-1.1-.9-2-2-2l-4 3z"
                  fill="#1D4ED8"
                />
                <circle cx="12" cy="8" r="2" fill="white" />
              </svg>

              <span className="cs-ann_vline" />

              <span className="cs-ann_title">
                WEBSITE UNDER TRANSFORMATION
              </span>

              <span className="cs-ann_vline" />

              <span className="cs-ann_sub">
                Building the infrastructure for humanity&apos;s deep
                space future.
              </span>
            </div>

            {/* Center Divider */}
            <span className="cs-ann_center_line" />

            {/* Right */}
            <div className="cs-ann_right">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                style={{ flexShrink: 0 }}
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="#3B82F6"
                  strokeWidth="1.5"
                />
                <ellipse
                  cx="12"
                  cy="12"
                  rx="3.5"
                  ry="9"
                  stroke="#3B82F6"
                  strokeWidth="1.5"
                />
                <line
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  stroke="#3B82F6"
                  strokeWidth="1.5"
                />
                <line
                  x1="4.5"
                  y1="7.5"
                  x2="19.5"
                  y2="7.5"
                  stroke="#3B82F6"
                  strokeWidth="1.5"
                />
                <line
                  x1="4.5"
                  y1="16.5"
                  x2="19.5"
                  y2="16.5"
                  stroke="#3B82F6"
                  strokeWidth="1.5"
                />
              </svg>

              <span className="cs-ann_launch">
                Our next-generation platform
                <br />
                launches in 4–6 weeks.
              </span>

              <button
                className="cs-ann_x"
                onClick={() => setAnnVisible(false)}
                aria-label="Dismiss announcement"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Navbar */}
        <header
          className={`cs-site_header cs-style1 text-uppercase ${
            variant || ""
          } ${
            isSticky ? "cs-sticky_header_active" : ""
          }`}
        >
          <Div className="cs-main_header">
            <Div className="container">
              <Div className="cs-main_header_in">

                {/* Logo */}
                <Div className="cs-main_header_left">
                  <Link className="cs-site_branding" to="/">
                    <img src={logos} alt="Onnes Logo" />
                  </Link>
                </Div>

                {/* Navigation */}
                <Div className="cs-main_header_center">
                  <Div className="cs-nav cs-primary_font cs-medium">

                    <ul
                      className="cs-nav_list"
                      style={{
                        display: mobileToggle ? "block" : "",
                      }}
                    >

                      {/* Aerospace */}
                      <li>
                        <Link to="/" onClick={closeMobileMenu}>
                          Aerospace
                        </Link>
                      </li>

                      {/* Capabilities */}
                      <li>
                        <Link
                          to="#"
                          onClick={(e) => {
                            e.preventDefault();
                            closeMobileMenu();
                          }}
                        >
                          Capabilities
                        </Link>
                      </li>

                      {/* Technologies */}
                      <li className="menu-item-has-children">
                        <NavLink
                          to="/technology"
                          onClick={closeMobileMenu}
                        >
                          Technologies
                        </NavLink>

                        <DropDown>
                          <ul>
                            <li>
                              <Link
                                to="/technology#carbon-fiber"
                                onClick={closeMobileMenu}
                              >
                                Carbon Fiber Tanks
                              </Link>
                            </li>

                            <li>
                              <Link
                                to="/technology#cryogenics"
                                onClick={closeMobileMenu}
                              >
                                Cryogenics Systems
                              </Link>
                            </li>

                            <li>
                              <Link
                                to="/technology#thermal"
                                onClick={closeMobileMenu}
                              >
                                Thermal Management
                              </Link>
                            </li>

                            <li>
                              <Link
                                to="/technology#recycling"
                                onClick={closeMobileMenu}
                              >
                                Sustainability And Recycling
                              </Link>
                            </li>
                          </ul>
                        </DropDown>
                      </li>

                      {/* About */}
                      <li>
                        <NavLink
                          to="/team"
                          onClick={closeMobileMenu}
                        >
                          About Us
                        </NavLink>
                      </li>

                      {/* Contact */}
                      <li>
                        <NavLink
                          to="/contact"
                          onClick={closeMobileMenu}
                        >
                          Contact
                        </NavLink>
                      </li>

                    </ul>

                    {/* Mobile Toggle */}
                    <span
                      className={
                        mobileToggle
                          ? "cs-munu_toggle cs-toggle_active"
                          : "cs-munu_toggle"
                      }
                      onClick={() =>
                        setMobileToggle(!mobileToggle)
                      }
                    >
                      <span></span>
                    </span>

                  </Div>
                </Div>

                {/* Right Action */}
                <Div className="cs-main_header_right">
                  <Div className="cs-toolbox">
                    <span
                      className="cs-icon_btn"
                      onClick={() =>
                        setSideHeaderToggle(
                          !sideHeaderToggle
                        )
                      }
                    >
                      <span className="cs-icon_btn_in">
                        <span />
                        <span />
                        <span />
                        <span />
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
      <div
        style={{
          height: `${totalFixedHeight}px`,
        }}
      />

      {/* Side Drawer */}
      <Div
        className={
          sideHeaderToggle
            ? "cs-side_header active"
            : "cs-side_header"
        }
      >

        <button
          className="cs-close"
          onClick={() =>
            setSideHeaderToggle(false)
          }
        />

        <Div
          className="cs-side_header_overlay"
          onClick={() =>
            setSideHeaderToggle(false)
          }
        />

        <Div className="cs-side_header_in">

          <Div className="cs-side_header_shape" />

          <Link className="cs-site_branding" to="/">
            <img src={logos} alt="Onnes Logo" />
          </Link>

          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Do you have a project in your
              <br />
              mind? Keep connect us.
            </h2>
          </Div>

          <Div className="cs-side_header_box">
            <ContactInfoWidget
              title="Contact Us"
              withIcon
            />
          </Div>

          <Div className="cs-side_header_box">
            <Newsletter
              title="Subscribe"
              subtitle="Subscribe to our newsletters to get the latest news and updates"
              placeholder="example@gmail.com"
            />
          </Div>

          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>

        </Div>
      </Div>
    </>
  );
}