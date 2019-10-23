import React from 'react';
import './formInput.css';

const Forminput= (props) => {
  return(
    <div>
        {/* Lable Element */}
        <label htmlFor = {props.name}>  

            {/* Lable inner text */}
            {props.label} 

            {/* Lable Error Message */}
            {props.validate && !props.currentState && props.isrequired ? <span className="required"> Required</span> : ''}

        </label>

        {/* Breakline */} 
        <br />

        {/* Input Field */}
        <input maxLength={props.max} value={props.currentState} className= {props.validate && !props.currentState && props.isrequired ? props.validate : ''} type="text" name={props.name} onChange={props.onChange} required/>

    </div>
  );
};

export default Forminput