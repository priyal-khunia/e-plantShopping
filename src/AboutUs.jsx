import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
            <span className="eyebrow">Est. Greenhouse Grown</span>
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>
            <p className="landing_subtext">
              Bring home thoughtfully grown houseplants that clean your air,
              calm your space, and thrive with almost no fuss.
            </p>
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-number">30+</span>
                <span className="stat-label">Plant Varieties</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Hand Potted</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5★</span>
                <span className="stat-label">Care Rated</span>
              </div>
            </div>
          </div>
          <div className="aboutus_container">
            <AboutUs />
          </div>
        </div>
      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList onHomeClick={handleHomeClick} />
      </div>
    </div>
  );
}

export default App;