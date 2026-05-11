import React from 'react';
import Div from '../Div';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';
import TextWidget from '../Widget/TextWidget';
import './footer.scss';
import Logo from "../../logos/OnnesLogo.png"
const copyrightLinks = [
  {
    title: 'Terms of Use',
    href: '/',
  },
  {
    title: 'Privacy Policy',
    href: '/',
  },
];


export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-4 col-md-4 col-sm-12">
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc={Logo}
                  logoAlt="Logo"
                  text={
                    <>
                      T-Hub, Hyderabad Knowledge City<br />
                      Hyderabad,<br />
                      Telangana 500081 INDIA
                    </>
                  }
                  
                />
                <SocialWidget />
              </Div>
            </Div>
            <Div className="col-lg-4 col-md-4 col-sm-12">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Contact Us" />
              </Div>
            </Div>
            <Div className="col-lg-4 col-md-4 col-sm-12">
              <Div className="cs-footer_item">
                <Newsletter
                  title="Subscribe"
                  subtitle="Subscribe to our newsletters to get the latest news and updates"
                  placeholder="example@gmail.com"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">Copyright © 2026 Onnes.</Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=" cs-style2" />
          </Div>
        </Div>
      </Div>
    </footer>
  );
}
