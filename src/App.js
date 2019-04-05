import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      total: 0,
      operator: "",
    }
  }

  Multiplesnumber(num) {
      if (this.state.total !==0 && this.state.operator === "") {
        this.setState ({
          total: this.state.total * 10 + num
        })
      }
  
  }

  reset = (c) => {
    this.setState({
        total: 0,
        operator: "",
    })
  }  

  handlenumber(number){
    // if (this.state.operator === null) {
    //   this.setState ({
    //     total: eval(this.state.total)
    //   })
    // }
    if (this.state.operator === "") {
        this.setState({
          total: number
        })
    } else {
      if (this.state.operator === "+") {
        this.setState({
          total:  this.state.total + number 
        })
      }
      if (this.state.operator === "-") {
        this.setState({
          total: this.state.total - number
        })
      }
      if (this.state.operator === "/") {
        this.setState({
          total: this.state.total / number
        })
      }
      if (this.state.operator === "*") {
        this.setState({
          total: this.state.total * number 
        })
      }
    }
  }

  operatornumber(operator) {
    this.setState({
      operator: operator
    })
  }

  render() {
    return (
      <div className="App">
         <table> 
         <tr> 
            <td colSpan="5" className="back0">{this.state.total}</td> 
         </tr> 

         <tr> 
            <td onClick={() => {
              this.handlenumber(1)
              this.Multiplesnumber(1)
            }}> 1 </td> 
            <td onClick={() => {
              this.handlenumber(2)
              this.Multiplesnumber(2)
            }}> 2 </td> 
            <td onClick={() => {
              this.handlenumber(3)
              this.Multiplesnumber(3)
            }}> 3 </td> 
            <td className = "calculate" onClick={() => {
              this.operatornumber("/")
            }}> / </td> 
         </tr> 
         <tr> 
            <td onClick={() => {
              this.handlenumber(4)
              this.Multiplesnumber(4)
            }}> 4 </td> 
            <td onClick={() => {
              this.handlenumber(5)
              this.Multiplesnumber(5)
            }}> 5 </td> 
            <td onClick={() => {
              this.handlenumber(6)
              this.Multiplesnumber(6)

            }}> 6 </td> 
            <td className = "calculate" onClick={() => {
              this.operatornumber("-")
            }}> - </td> 
         </tr> 
         <tr> 
            <td onClick={() => {
              this.handlenumber(7)
              this.Multiplesnumber(7)
            }}> 7 </td> 
            <td onClick={() => {
              this.handlenumber(8)
              this.Multiplesnumber(8)
            }}> 8 </td> 
            <td onClick={() => {
              this.handlenumber(9)
              this.Multiplesnumber(9)
            }}> 9 </td> 
            <td className = "calculate" onClick={() => {
              this.operatornumber("+")
            }}> + </td> 
         </tr> 
         <tr> 
            <td id="made"> Made by Zayro </td> 
            <td className = "calculate" onClick={() => {
              this.handlenumber(0)
            }}> 0 </td> 
            <td className = "calculate" onClick={() => {
              this.operatornumber("*")
            }}> * </td> 
            <td className = "calculate" onClick={() => {
              this.reset(0)
            }}> C </td> 
         </tr> 
      </table> 
      </div>
    );
  }
}

export default App;
