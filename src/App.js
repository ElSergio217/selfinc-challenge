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
