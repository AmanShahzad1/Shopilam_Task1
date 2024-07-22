import React from 'react';
import footerLogo from "../logos/white-full.svg";

const Footer = () => {
  return (
    <div className="section footer mb-0">
      <div className="container">
        <div className="row footer-row">
          <div className="col-12 text-right">
            <a className="btn btn-circle btn-outline-semi-light footer-circle-button scrollTo" href="#home" id="footerCircleButton">
              <i className="simple-icon-arrow-up"></i>
            </a>
          </div>
          <div className="col-12 text-center footer-content">
            <a href="#home" className="scrollTo">
              <img className="footer-logo" alt="footer logo" src={footerLogo} />
            </a>
          </div>
        </div>
      </div>
      <div className="separator mt-5"></div>
      <div className="container copyright pt-5 pb-5">
        <div className="row">
          <div className="col-12"></div>
          <div className="col-12 text-center">
            <p className="mb-0">2020 © ColoredStrategies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
