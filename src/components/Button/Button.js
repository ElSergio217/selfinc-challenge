import React from 'react';
import './Button.css';

const Button= (props) => {
  return(
    // Button Element
    <button type={props.type} formNoValidate> 

        {/* Button Inner Text */}
        {props.text} 

        {/* Button Inner Icon */}
        {props.hasIcon ? <img src={props.iconSrc} className="icon" alt="icon" /> : ''} 

    </button>
  );
};

export default Button

