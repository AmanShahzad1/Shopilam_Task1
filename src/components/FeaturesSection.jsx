
import React from 'react';

import "../css/dore.light.bluenavy.min.css";
import "../css/vendor/bootstrap-stars.css";
import "../css/vendor/bootstrap.min.css";


import pleasantDesignImg from '../img/landing-page/features/plesant-design.png';
import extraResponsiveImg from '../img/landing-page/features/extra-responsive.png';
import superfineChartsImg from '../img/landing-page/features/superfine-charts.png';
import layoutsForTheJobImg from '../img/landing-page/features/layouts-for-the-job.png';
import smartMenuImg from '../img/landing-page/features/smart-menu.png';

const FeaturesSection = () => {
  return (
    <div className="section">
      <div className="container" id="features">
        <div className="row">
          <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
            <h1>Features At a Glance</h1>
            <p>
              We tried to create an admin theme that we would like to use ourselves so we listed our priorities. We
              would like to have a theme that is not over complicated to use, does the job well, contains must-have
              components and looks really nice.
            </p>
          </div>
        </div>

        <div className="row feature-row">
          <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center">
            <div className="d-flex">
              <div className="feature-icon-container">
                <div className="icon-background">
                  <i className="fas fa-fw fa-ban"></i>
                </div>
              </div>
              <div className="feature-text-container">
                <h2>Pleasant Design</h2>
                <p>
                  As a web developer we enjoy working on something that looks nice. It is not an absolute necessity but it really motivates us that the final product will look good from a user point of view. <br />
                  <br />
                  So we put a lot of work into colors, icons, composition, and design harmony. Themed components and layouts with the same design language. <br />
                  <br />
                  We kept user experience principles always at the heart of the design process.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 offset-lg-1 offset-md-0 position-relative">
            <div className="background-item-1"></div>
            <img alt="feature" className="feature-image-right feature-image-charts position-relative" src={pleasantDesignImg} />
          </div>
        </div>

        <div className="row feature-row">
          <div className="col-12 col-md-6 col-lg-6 order-2 order-md-1">
            <img alt="feature" className="feature-image-left feature-image-charts" src={extraResponsiveImg} />
          </div>
          <div className="col-12 col-md-6 offset-md-0 col-lg-5 offset-lg-1 d-flex align-items-center order-1 order-md-2">
            <div className="d-flex">
              <div className="feature-icon-container">
                <div className="icon-background">
                  <i className="fas fa-fw fa-ban"></i>
                </div>
              </div>
              <div className="feature-text-container">
                <h2>Extra Responsive</h2>
                <p>
                  Xxs breakpoint is for smaller screens that have a resolution lower than 420px. Xs works between 576px and 420px. Xxl breakpoint is for larger screens that have a resolution higher than 1440px. Xl works between 1200px and 1440px. <br />
                  <br />
                  With this approach, we were able to create better experiences for smaller and larger screens.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row feature-row">
          <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center">
            <div className="d-flex">
              <div className="feature-icon-container">
                <div className="icon-background">
                  <i className="fas fa-fw fa-ban"></i>
                </div>
              </div>
              <div className="feature-text-container">
                <h2>Superfine Charts</h2>
                <p>
                  Using charts is a good way to visualize data, but they often look ugly and break the rhythm of design. <br />
                  <br />
                  We concentrated on a single chart library and tried to create charts that look good with color, opacity, border, and shadow. <br />
                  <br />
                  Used certain plugins and created some to make charts even more useful and beautiful.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 offset-lg-1 offset-md-0 ">
            <img alt="feature" className="feature-image-right feature-image-charts" src={superfineChartsImg} />
          </div>
        </div>

        <div className="row feature-row">
          <div className="col-12 col-md-6 col-lg-6 order-2 order-md-1">
            <img alt="feature" className="feature-image-left feature-image-charts" src={layoutsForTheJobImg} />
          </div>
          <div className="col-12 col-md-6 offset-md-0 col-lg-5 offset-lg-1 d-flex align-items-center order-1 order-md-2">
            <div className="d-flex">
              <div className="feature-icon-container">
                <div className="icon-background">
                  <i className="fas fa-fw fa-ban"></i>
                </div>
              </div>
              <div className="feature-text-container">
                <h2>Layouts for the Job</h2>
                <p>
                  Layouts are the real thing; they need to be accurate and right for the job. They should be functional for both the user and developer. <br />
                  <br />
                  We created lots of different layouts for different jobs. <br />
                  <br />
                  Listing pages with view mode-changing capabilities, shift select and select all functionality, application layouts with an additional menu, authentication, and error layouts, which have a different design than the other pages, were our main focus. We also created details pages with tabs that can hold many components.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row feature-row">
          <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center">
            <div className="d-flex">
              <div className="feature-icon-container">
                <div className="icon-background">
                  <i className="fas fa-fw fa-ban"></i>
                </div>
              </div>
              <div className="feature-text-container">
                <h2>Smart Menu</h2>
                <p>
                  Instead of good old single-panel menus with accordion structure that look overcomplicated, we created 2 panels and categorized pages accordingly. <br />
                  <br />
                  The default menu auto hides sub-panel when resolution is under some breakpoint to open some space. You may also hide the menu completely or use only the main panel open only.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 offset-lg-1 offset-md-0 ">
            <img alt="feature" className="feature-image-right feature-image-charts" src={smartMenuImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
