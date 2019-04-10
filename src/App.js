import React, { Component } from 'react';
import Calculator from './Components/Calculator';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import PasCalculator from './Components/PasCalculator';



class App extends Component {
  
  render() {
    return(
        <Router>
          <div>
            <Route path={'/calculator'} component = {Calculator}/>
            <Route exact path={'/'} component = {PasCalculator}/>
          </div>
        </Router>
    );
  }
}

export default App;
