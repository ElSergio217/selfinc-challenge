import React from 'react';
import './Text.css';

const Text= (props) => {
  return(
    // Text Element
    <p className={props.class}> 

      {/* Element Inner Text */}
      {props.text} 

    </p>
  );
};

export default Text