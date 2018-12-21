import React from 'react';
import CompassLogo from "../icons/compass-white-logo";

import "../../styles/components/ui/_footer.scss";

const offices = [
  {'city': 'Amsterdam', 'place': ' C Amsterdam 1017XD.', 'address': 'Weteringschans 165.', 'phone': '+1 212 845 9569'},
  {'city': 'Buenos Aires', 'place': 'Buenos Aires B C1008.', 'address': 'Avenida Corrientes 800.', 'phone': '+1 212 845 9569'},
  {'city': 'Davao', 'place': 'Davao City, 8000.', 'address': '4F Topaz Tower, Damosa IT Park, Lanang.', 'phone': '+1 212 845 9569'},
  {'city': 'Detroit', 'place': 'Detroit MI 48226.', 'address': '19 Clifford St.', 'phone': '+1 212 845 9569'},
  {'city': 'Los Angeles', 'place': 'Los Angeles CA 90094.', 'address': '12130 Millennium Drive.', 'phone': '+1 212 845 9569'},
  {'city': 'Medellin', 'place': 'Medellin CA 90094.', 'address': '120 Drive.', 'phone': '+1 212 845 9569'},
  {'city': 'São Paulo', 'place': 'São Paulo SP 01140-060.', 'address': '1Av. Nicolas Boer 399.', 'phone': '+1 212 845 9569'}  
]

const Footer = props => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <CompassLogo />
        <span className="">Global Studio</span>
      </div>
      <div className="footer-container-info">
        {
          offices.map((item, index) => (
            <div className="item-headquarters" key={index}>
              <span className="title">{item.city}</span><br />
              {item.address}<br />
              {item.place}<br />
              <span className="phone">{item.phone}</span>
            </div>
          ))
        }
      </div>
      <div className="copyright">
        <div className="right-content">
          <small>Privacy Policy</small>
          <small>Terms of Use</small>
        </div>
        <small>© Compass. All Rigths Reservados. 2018 </small>
      </div>
    </div>
  )
}

export default Footer;
