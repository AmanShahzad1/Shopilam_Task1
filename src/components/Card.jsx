import React from 'react';
import "../font/iconsmind-s/css/iconsminds.css"
import "../font/simple-line-icons/css/simple-line-icons.css";
import "../css/main.css";
import "../css/dore.light.bluenavy.min.css";
import "../css/vendor/bootstrap-stars.css";
import "../css/vendor/bootstrap.min.css";
import "../css/vendor/owl.carousel.min.css";
import "../css/vendor/video-js.css";



const Card = ({ icon, title, text }) => {
  return (
    <div className="card">
      <div className="card-body text-center">
        <div>
          <i className={`${icon} large-icon`}></i>
          <h5 className="mb-3 font-weight-semibold">{title}</h5>
        </div>
        <div>
          <p className="detail-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
