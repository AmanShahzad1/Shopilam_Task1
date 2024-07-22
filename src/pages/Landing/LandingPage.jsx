import React from 'react';
import MobileMenu from '../../components/MobileMenu';
import Navbar from '../../components/Navbar';
import HomeSection from '../../components/HomeSection';

import "../../css/dore.light.bluenavy.min.css";
import "../../css/vendor/bootstrap-stars.css";
import "../../css/vendor/bootstrap.min.css";





const LandingPage = () => {
  return (
    <div className="landing-page">
      <MobileMenu/>
      <div className="main-container">
        <Navbar/>
        <div className="content-container" id="home">
          <HomeSection/>
        </div>
        </div>
    </div>
  );
};

export default LandingPage;
