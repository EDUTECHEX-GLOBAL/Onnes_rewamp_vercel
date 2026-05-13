import React from 'react';
import Div from '../Div';
import './logolist.scss';

// Top scrolling partner logos
const topPartners = [
  { src: '/images/Partner_1.1.png', alt: 'Partner 1' },
  { src: '/images/IAI.png', alt: 'Partner IAI' },
  { src: '/images/Partner_2.1.png', alt: 'Partner 2' },
  { src: '/images/Partner_3.1.jpg', alt: 'Partner 3' },
  { src: '/images/Partner_4.4.png', alt: 'Partner 4' },
  { src: '/images/Partner_4.3.png', alt: 'Partner 5' },
  { src: '/images/PARAS.png', alt: 'Partner Paras' },
  { src: '/images/Partner_7.1.png', alt: 'Partner 7' },
  { src: '/images/Partner_nvidia.png', alt: 'Partner 7.1' },
  { src: '/images/STARBURST.png', alt: 'Partner Starburst' },
  { src: '/images/Client_3.png', alt: 'Partner 10' }, // moved from bottom
  { src: '/images/IIMAVentures-04.png', alt: 'Partner12' },
  { src: '/images/cropped_cse_logo.svg', alt: 'Extra Partner 3' }, // moved from extra-bottom
  { src: '/images/ASTRA.png', alt: 'Partner 6' },
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