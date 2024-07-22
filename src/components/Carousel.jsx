import React from 'react';
import "../font/iconsmind-s/css/iconsminds.css"
import "../font/simple-line-icons/css/simple-line-icons.css";
import "../css/main.css";
import "../css/dore.light.bluenavy.min.css";
import "../css/vendor/bootstrap-stars.css";
import "../css/vendor/bootstrap.min.css";
import "../css/vendor/owl.carousel.min.css";
import "../css/vendor/video-js.css";


const Carousel = () => {
  const cards = [
    { icon: 'iconsminds-mouse-3', title: 'Right Click Menu', text: 'Increases overall usability of the project by providing additional actions menu.' },
    { icon: 'iconsminds-electric-guitar', title: 'Video Player', text: 'Carefully themed multimedia players powered by Video.js library with Youtube support.' },
    { icon: 'iconsminds-keyboard', title: 'Keyboard Shortcuts', text: 'Easily configurable keyboard shortcuts plugin that highly improves user experience.' },
    { icon: 'iconsminds-three-arrow-fork', title: 'Two Panels Menu', text: 'Three states two panels icon menu that looks good, auto resizes and does the job well.' },
    { icon: 'iconsminds-deer', title: 'Icons Mind', text: '1040 icons in 53 different categories, designed pixel perfect and ready for your project.' },
    { icon: 'iconsminds-palette', title: '20 Color Schemes', text: 'Colors, icons and design harmony that creates excellent themes to cover entire project.' },
    { icon: 'iconsminds-air-balloon-1', title: '4 Applications', text: 'Applications that mostly made of components are the way to get started to create something similar.' },
    { icon: 'iconsminds-resize', title: 'Extra Responsive', text: 'Custom Bootstrap 4 xxs & xxl classes delivers better experiences for smaller and larger screens.' }
  ];

  return (
    <div className="owl-container">
      <div className="owl-carousel home-carousel">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="card-body text-center">
              <div>
                <i className={`${card.icon} large-icon`}></i>
                <h5 className="mb-3 font-weight-semibold">{card.title}</h5>
              </div>
              <div>
                <p className="detail-text">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
