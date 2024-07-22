import React from 'react';

const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <a href="#home" className="logo-mobile scrollTo">
        <span></span>
      </a>
      <ul className="navbar-nav">
        <li className="nav-item"><a href="#features" className="scrollTo">FEATURES</a></li>
        <li className="nav-item"><a href="#layouts" className="scrollTo">LAYOUTS</a></li>
        <li className="nav-item"><a href="#components" className="scrollTo">COMPONENTS</a></li>
        <li className="nav-item"><a href="#apps" className="scrollTo">APPS</a></li>
        <li className="nav-item"><a href="#themes" className="scrollTo">THEMES</a></li>
        <li className="nav-item">
          <div className="separator"></div>
        </li>
        <li className="nav-item pl-4">
          <a className="btn btn-outline-semi-light btn-sm pr-4 pl-4" target="_top" href="https://1.envato.market/5kAb">BUY</a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
