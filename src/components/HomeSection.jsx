import React, { useEffect, useState } from 'react';
import { Chart, registerables } from 'chart.js';
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

Chart.register(...registerables);

const API = "https://dummyjson.com/carts";

const HomeSection = () => {
  const [carts, setCarts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cartsPerPage = 5;

  const fetchCarts = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.carts && data.carts.length > 0) {
        setCarts(data.carts);
        createBarChart(data.carts);
      }
      console.log(data.carts);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchCarts(API);
  }, []);

  // Calculate pagination data
  const indexOfLastCart = currentPage * cartsPerPage;
  const indexOfFirstCart = indexOfLastCart - cartsPerPage;
  const currentCarts = carts.slice(indexOfFirstCart, indexOfLastCart);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Render page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(carts.length / cartsPerPage); i++) {
    pageNumbers.push(i);
  }

  const createBarChart = (data) => {
    const ctx = document.getElementById('productChart').getContext('2d');
    const labels = data.map(cart => cart.userId);
    const totals = data.map(cart => cart.total);

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Total',
          data: totals,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  };

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
          <h5 className="card-title">Carts Data</h5>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Total Products</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {currentCarts.map(cart => (
                <tr key={cart.id}>
                  <th scope="row">{cart.id}</th>
                  <td>{cart.userId}</td>
                  <td>{cart.totalProducts}</td>
                  <td>{cart.total}</td>
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

          <h5 style={{ marginTop: "50px" }} className="mb-4 text-center">Bar Chart</h5>
          <div className="row justify-content-center">
            <div className="col-lg-8 mb-5">
              <h6 className="mb-4 text-center">Shadow</h6>
              <div className="chart-container chart">
                <canvas id="productChart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomeSection;
