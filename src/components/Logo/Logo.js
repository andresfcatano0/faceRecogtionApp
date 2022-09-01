import React from "react";
import Tilt from 'react-parallax-tilt';
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo ma4 mt0" >
    <Tilt>
        <div className="eye" style={{ height: '150px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;