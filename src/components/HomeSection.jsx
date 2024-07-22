import React, { useEffect, useState } from 'react';
import "../css/vendor/bootstrap-stars.css";
import "../css/vendor/bootstrap.min.css";
import Carousel from './Carousel';
import hero from "../img/landing-page/home-hero.png";
import heroMobile from "../img/landing-page/home-hero-mobile.png";
import FeaturesSection from './FeaturesSection';
import LayoutsSection from './LayoutsSection';
import ComponentsSection from './ComponentsSection';
import ApplicationsSection from './ApplicationsSection';
import ThemesSection from './ThemesSection';
import EnjoyingSection from './EnjoyingSection';
import Footer from './Footer';

const API = "https://jsonplaceholder.typicode.com/users";

const HomeSection = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  // Calculate pagination data
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Render page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="section home">
      <div className="container">
        <div className="row home-row">
          <div className="col-12 d-block d-md-none">
            <a target="_blank" href="/Dashboard.Default.html">
              <img alt="mobile hero" className="mobile-hero" src={heroMobile} />
            </a>
          </div>

          <div className="col-12 col-xl-4 col-lg-5 col-md-6">
            <div className="home-text">
              <div className="display-1">MAGIC IS IN <br />THE DETAILS</div>
              <p className="white mb-5">
                Dore is the combination of good design, quality code and attention for details.<br />
                <br />
                We used the same design language for components, layouts, apps
                and other parts of the template. <br />
                <br />
                Hope you enjoy it!
              </p>
              <a className="btn btn-secondary btn-xl mr-2 mb-2" target="_blank" href="/Dashboard.Default.html">
                VIEW NOW <i className="simple-icon-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-12 col-xl-7 offset-xl-1 col-lg-7 col-md-6 d-none d-md-block">
            <a target="_blank" href="/Dashboard.Default.html">
              <img alt="hero" src={hero} />
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-12 p-0">
            <Carousel />
          </div>
        </div>

        <div className="row">
          <a className="btn btn-circle btn-outline-semi-light hero-circle-button scrollTo" href="#features" id="homeCircleButton">
            <i className="simple-icon-arrow-down"></i>
          </a>
        </div>
      </div>
      <FeaturesSection />
      <LayoutsSection />
      <ComponentsSection />
      <ApplicationsSection />
      <ThemesSection />
      <EnjoyingSection />

      <div className="section mb-0">
        <div className="container">
          <h5 className="card-title">User Data</h5>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map(user => (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination-container">
            {pageNumbers.map(number => (
              <button
                key={number}
                onClick={() => handlePageChange(number)}
                className={`btn btn-outline-primary ${currentPage === number ? 'active' : ''}`}
              >
                {number}
              </button>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomeSection;
