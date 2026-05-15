import React from "react";
import "./MobileHero.css";

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

export default function MobileHero() {
  return (
    <div className="mobile-hero-banner">
      {/* Mobile-specific cropped image - focuses on spaceship */}
      <img
        src="/images/Home_bannermobile.png"
        alt="Onnes Aerospace Banner"
        className="mobile-hero-image"
      />

      <div className="mobile-hero-overlay">
        <div className="mobile-hero-content">
          <h1 className="mobile-hero-heading">
            Engineering Tomorrow
            <br />
            <span className="mobile-hero-highlight">Beyond Boundaries.</span>
          </h1>

          <div className="mobile-hero-blue-line" />

          <p className="mobile-hero-subtext">
            Onnes Aerospace is engineering intelligent
            infrastructure systems for persistent orbital
            operations, lunar logistics, autonomous aerospace
            platforms, and next-generation deep-space missions.
          </p>

          <button className="mobile-hero-btn">
            EXPLORE OUR CAPABILITIES &nbsp;&gt;
          </button>
        </div>
      </div>

      {/* Bottom Capabilities Bar */}
      <div className="mobile-hero-capabilities-bar">
        {capabilityIcons.map((item, index) => {
          const ids = [
            "orbital-infrastructure",
            "mission-systems",
            "lunar-logistics",
            "hypersonic-isr",
          ];

          return (
            <div
              className="mobile-hero-capability-item"
              key={index}
              id={ids[index]}
            >
              <div className="mobile-hero-capability-icon">
                {item.icon}
              </div>

              <span className="mobile-hero-capability-label">
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
  );
}