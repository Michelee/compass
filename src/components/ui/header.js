import React from 'react';
import CompassLogo from '../icons/compass-white-logo'
import '../../styles/components/ui/_header.scss'

const Header = props => {
  return (
    <div className="header-container">
      <CompassLogo />
    </div>
  )
}

export default Header;
