import React from 'react'
import '../../styles/components/index/_localities-section.scss'

const LocalitiesSection = () => (
  <div className="section localities">
    <h2>Find us from coast to coast</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
      tempor incididunt ut labore et dolore magna aliqua. 
    </p>
    <div className="locations-container">
      <div className="inline-boxes">
        <div className="location location-los-angeles">
          <h3>Los Angeles</h3>
        </div>
        <div className="location location-detroit">
          <h3>Detroit</h3>
        </div>
      </div>
      <div className="inline-boxes middle">
        <div className="location location-buenos-aires">
          <h3>Buenos Aires</h3>
        </div>
        <div className="location location-medellin">
          <h3>Medellin</h3>
        </div>
        <div className="location location-sao-paulo">
          <h3>São Paulo</h3>
        </div>
      </div>
      <div className="inline-boxes">
        <div className="location location-amsterdam">
          <h3>Amsterdam</h3>
        </div>
        <div className="location location-davao">
          <h3>Davao</h3>
        </div>
      </div>
    </div>
  </div>
)

export default LocalitiesSection;
