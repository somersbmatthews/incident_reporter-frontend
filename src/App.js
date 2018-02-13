import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import SignInScreen from './SignInScreen'
import ReportCrime from './ReportCrime'
import IncidentMap from './IncidentMap'

// import './App.css';

import WelcomeScreen from './WelcomeScreen.js';

import './css/App.css';


class App extends Component {
  constructor(){
    super();

    this.state = {
     signedin: false,
     toggleFormError: false,
     submissionAddress: ""

    }
  }
  loginSuccess = ()=>{
    this.setState({signedin: true})
  }
  reRenderForm = ()=>{
    console.log(this.state.toggleFormError, "un rendered app.js")
    this.setState({toggleFormError: true})
    console.log(this.state.toggleFormError, "re rendered app.js")
  }
  getAddress = (address) => {
    const state = this.state
    state.setState({submissionAddress: address})
  }
  render() {

      
    
    return (
      // {this.state.signedin ? <IncidentMap /> : <SignInScreen loginSuccess={this.loginSuccess} reRenderForm={this.reRenderForm} toggleFormError={this.state.toggleFormError}/>}
      <div className="App">

        
        <IncidentMap address={this.state.submissionAddress}/>
        
        <ReportCrime getAddress={this.getAddress} />

        

      </div>
    );
  }
}

export default App;