import React from 'react';
import Div from '../Div';
import './logolist.scss';

// Top scrolling partner logos — starts with Starburst
const topPartners = [
  { src: '/images/STARBURST.png', alt: 'Partner Starburst' },
  { src: '/images/IAI.png', alt: 'Partner IAI' },
  { src: '/images/ASTRA.png', alt: 'Astra' },
  { src: '/images/IIMAVentures-04.png', alt: 'IIMA' },
  { src: '/images/PointOne.png', alt: 'Pointone' },
  { src: '/images/Partner_2.1.png', alt: 'startup seed' },
  { src: '/images/cropped_cse_logo.svg', alt: 'CSE' },
  { src: '/images/PARAS.png', alt: 'Partner Paras' },
  { src: '/images/Client_3.png', alt: 'Orbit Aid' },
  { src: '/images/Partner_7.1.png', alt: 'AWS' },
  { src: '/images/Partner_nvidia.png', alt: 'Nvidia' },
  { src: '/images/Partner_1.1.png', alt: 'Thub' },
  { src: '/images/Partner_3.1.jpg', alt: 'venture catalyst space' },
  { src: '/images/Partner_4.4.png', alt: 'Invest SA' },
];
export default function LogoList() {
  const duplicatedPartners = [...topPartners, ...topPartners];

  return (
    <Div className="cs-partner_logo_wrap_outer">
      {/* Top Scrolling Row */}
      <Div className="cs-partner_slider_container">
        <div
          className="cs-partner_logo_slider"
          aria-label="Top Partners logos scrolling"
        >
          {duplicatedPartners.map((logo, index) => {
            const isLastOfSet =
              index === topPartners.length - 1 ||
              index === duplicatedPartners.length - 1;

            return (
              <div
                className={`cs-partner_logo 
                  ${logo.alt === 'Partner 6' ? 'partner-6' : ''} 
                  ${logo.alt === 'Partner 4' ? 'partner-4' : ''} 
                  ${logo.alt === 'Partner Paras' ? 'partner-paras' : ''} 
                  ${isLastOfSet ? 'last-logo' : ''}`}
                key={`top-${index}`}
              >
                <img src={logo.src} alt={logo.alt} />
              </div>
            );
          })}
        </div>
      </Div>
    </Div>
  );
}