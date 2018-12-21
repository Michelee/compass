import React from 'react'
import Img1 from '../../images/c1.jpg'
import Img2 from '../../images/c2.jpg'
import Img3 from '../../images/c3.jpg'
import Img4 from '../../images/c4.jpg'
import Img5 from '../../images/c5.jpg'
import Img6 from '../../images/c6.jpg'
import '../../styles/components/index/_portfolio-section.scss'

const PortfolioSection = () => (
  <div className="section portfolio-container">
    <h2>Compass Global Studio</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. 
    </p>
    <div className="container">
      <div className="img1">
        <img src={Img1} alt="img" />
      </div>
      <div className="img2">
        <img src={Img2} alt="img" />
      </div>
      <div className="img3">
        <img src={Img3} alt="img" />
      </div>
      <div className="img4">
        <img src={Img4} alt="img" />
      </div>
      <div className="img4">
        <img src={Img5} alt="img" />
      </div>
      <div className="img4">
        <img src={Img6} alt="img" />
      </div>     
    </div>
  </div>
)

export default PortfolioSection;
