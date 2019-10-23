import React, { Component } from 'react';
import './App.css';

// Required assets
import Forminput from './components/formInput/formInput';
import Text from './components/Text/Text';
import Image from './components/Image/Image';
import Button from './components/Button/Button';
import GiantRobotLTD_Logo from './images/GiantRobotLTD_Logo.svg';
import White_Arrow from './images/White_Arrow.svg';


class App extends Component {

  constructor (props) {
    super(props);

    // Values of all forms
    this.state = {
      firstName: '',
      lastName: '',
      Address: '',
      Address2: '',
      phoneNumber:'',
      phoneNumberParsed:'',
      validate: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  //Function called everytime a value in a Input is changed
  handleChange(event) {
    this.setState({ 
      [event.target.name]: event.target.value,
    });

    // If event target is a phone Number
    if(event.target.name === "phoneNumber"){

      //Set Current state to phoneNuber replacing all letters
      this.setState({ 
        [event.target.name]: event.target.value.replace(/[A-Za-z]/g, ''),
      });

      // Remove the brackets if the current value is lover than 5
      if(event.target.value.length <= 5){
        this.setState({ 
          [event.target.name]: event.target.value.replace("(", '').replace(")", '').replace(/[A-Za-z]/g, ''),
        });
      }

      // Add brackets if the current length is larger than or equal to 3 and less than or equal to 6
      if(event.target.value.length >= 3 && event.target.value.length <= 6 && event.target.value.length > this.state.phoneNumber.length){
        this.setState({ 
          [event.target.name]: "("+ event.target.value.substring(0,3) + ") " ,
        });
      }
      
      // Add brackets if the current length is larger than or equal to 9 and less than or equal to 10
      if(event.target.value.length >= 9 && event.target.value.length <= 10 && event.target.value.length > this.state.phoneNumber.length){
        this.setState({ 
          [event.target.name]: event.target.value.substring(0,9) + "-" + event.target.value.substring(9),
        });
      }   

    }

  }

  //Fucntion called when submitting the form. Validates that all required form is filled.
  onSubmit(e){
    e.preventDefault();
    this.setState({validate:"formError"})
  }

  render() {
    return (
      <div className="App">
        <div className="container">

          {/* left side of the screen */}
          <div className="left-half">
            <div className="left-container">
              <div className="left-content">
                
                {/* Logo */}
                <Image src={GiantRobotLTD_Logo} class="logo" alt="logo"/>

                {/* Title */}
                <Text class="title" text="Welcome" />

                {/* Sub-Title */}
                <Text class="sub-title" text="Please Tell us a bit about yourself to get started." />

                <Text class="sub-title" text={this.state.phoneNumberParsed} />

              </div>
            </div>
          </div>

           {/* Right side of the screen */}
          <div className="right-half">
            <div className="right-container">
              <div className="right-content">

                {/* Form */}
                <form onSubmit={this.onSubmit}> 

                  {/* First name field */}
                  <Forminput 
                    name="firstName" 
                    label="First Name" 
                    validate={this.state.validate} 
                    currentState={this.state.firstName} 
                    onChange={this.handleChange}
                    isrequired= {true} />

                  {/* Last name field */}
                  <Forminput 
                    name="lastName" 
                    label="Last Name" 
                    validate={this.state.validate} 
                    currentState={this.state.lastName} 
                    onChange={this.handleChange}
                    isrequired= {true} />
                  
                  {/* Address field */}
                  <Forminput 
                    name="Address" 
                    label="Address" 
                    validate={this.state.validate} 
                    currentState={this.state.Address} 
                    onChange={this.handleChange}
                    isrequired= {true} />

                  {/* Address2 field */}
                  <Forminput 
                    name="Address2" 
                    label="Address (optional)" 
                    validate={this.state.validate} 
                    currentState={this.state.Address2} 
                    onChange={this.handleChange}
                    isrequired= {false} />

                  {/* phone field */}
                  <Forminput 
                    name="phoneNumber" 
                    label="Phone Number" 
                    validate={this.state.validate} 
                    currentState={this.state.phoneNumber} 
                    onChange={this.handleChange}
                    isrequired= {false} 
                    max = "14"/>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    text="Next"
                    hasIcon={true}
                    iconSrc= {White_Arrow} />

                </form> 

              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
