import React from 'react';
import './Image.css';

const Image= (props) => {
  return(
    // Image Element
    <img src={props.src} className={props.class} alt={props.alt} />
  );
};

export default Image