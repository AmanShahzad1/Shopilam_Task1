// src/components/LayoutsSection.js
import React from 'react';
import layoutMenuDefault from "../img/landing-page/layouts/menu-default.jpg";
import layoutMenuSubhidden from "../img/landing-page/layouts/menu-subhidden.jpg";
import layoutMenuHidden from "../img/landing-page/layouts/menu-hidden.jpg";
import layoutImageList from "../img/landing-page/layouts/image-list.jpg";
import layoutThumbList from "../img/landing-page/layouts/thumb-list.jpg";
import layoutDataList from "../img/landing-page/layouts/data-list.jpg";
import layoutDetails from "../img/landing-page/layouts/details.jpg";
import layoutAuthentication from "../img/landing-page/layouts/authentication.jpg";
import layoutSearchResult from "../img/landing-page/layouts/search-result.jpg";
import layoutSpa from "../img/landing-page/layouts/spa.jpg";
import layoutDataListAppMenuHidden from "../img/landing-page/layouts/data-list-app-menu-hidden.jpg";
import layoutTabs from "../img/landing-page/layouts/tabs.jpg";

const LayoutsSection = () => {
  return (
    <div className="section background">
      <div className="container" id="layouts">
        <div className="row">
          <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
            <h1>Structures & Layouts</h1>
            <p>
              We did our best to create layouts for various needs that developers might have and best experience
              for users.
              <br />
              They are clean and slick. They function well and look good at the same time.
            </p>
          </div>
        </div>
        <div className="row pt-5">
          {[
            { src: layoutMenuDefault, alt: "Menu Default" },
            { src: layoutMenuSubhidden, alt: "Menu Subhidden" },
            { src: layoutMenuHidden, alt: "Menu Hidden" },
            { src: layoutImageList, alt: "Image List" },
            { src: layoutThumbList, alt: "Thumb List" },
            { src: layoutDataList, alt: "Data List" },
            { src: layoutDetails, alt: "Details" },
            { src: layoutAuthentication, alt: "Authentication" },
            { src: layoutSearchResult, alt: "Search Results" },
            { src: layoutSpa, alt: "Single Page Application" },
            { src: layoutDataListAppMenuHidden, alt: "Data List App Menu Hidden" },
            { src: layoutTabs, alt: "Tabs" },
          ].map((layout, index) => (
            <div key={index} className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5">
              <img className="img-fluid border-radius depth-2 mb-3 semi-rounded" src={layout.src} alt={layout.alt} />
              <h4 className="text-center">{layout.alt}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LayoutsSection;
