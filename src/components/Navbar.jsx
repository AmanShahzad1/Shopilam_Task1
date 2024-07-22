import React from 'react';

const Navbar = () => {
  return (
    <nav className="landing-page-nav">
      <div className="container d-flex align-items-center justify-content-between">
        <a className="navbar-logo pull-left scrollTo" href="#home">
          <span className="white"></span>
          <span className="dark"></span>
        </a>
        <ul className="navbar-nav d-none d-lg-flex flex-row">
          <li className="nav-item"><a href="#features" className="scrollTo">FEATURES</a></li>
          <li className="nav-item"><a href="#layouts" className="scrollTo">LAYOUTS</a></li>
          <li className="nav-item"><a href="#components" className="scrollTo">COMPONENTS</a></li>
          <li className="nav-item"><a href="#apps" className="scrollTo">APPS</a></li>
          <li className="nav-item"><a href="#themes" className="scrollTo">THEMES</a></li>
          <li className="nav-item pl-4">
            <a className="btn btn-outline-semi-light btn-sm pr-4 pl-4" target="_top" href="https://1.envato.market/5kAb">BUY</a>
          </li>
        </ul>
        <a href="#" className="mobile-menu-button">
          <i className="simple-icon-menu"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
