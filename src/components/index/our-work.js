import React from 'react'
import OurWorkImg from '../../images/globe.png'
import '../../styles/components/index/_our-work.scss'

const OurWorkSection = () => (
  <div className="section our-work inline-boxes">
    <div className="our-work-img">
      <img src={OurWorkImg} alt="our-work" />
    </div>
    <div className="our-work-desc">
      <h2>Stand out from the crowd</h2>
      <p>Lorem ipsum dolor sit amet, consecte
        tur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolor
      </p>
    </div>
  </div>
)

export default OurWorkSection;

