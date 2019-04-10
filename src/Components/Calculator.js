import React, { Component } from 'react';
import swal from 'sweetalert';
import './../App.css';
// import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import CalculatorNumber from './CalculatorNumber'


export default class Calculator extends Component {

  constructor(props) {
    super(props)
    this.sweetalertfunction = this.sweetalertfunction.bind(this)
    this.state = {
      total: 0,
      operator: "",
      // data: null,
      // pictuers: [],
    }
  }

  componentDidMount(){
      fetch('http://blog.etherial.fr/')
        .then(response => response.json())
        .then(data => this.setState({data}) );
    // fetch('http://randomuser.me/api/?results=500')
    // .then(results => {
    //   return results.json();
    // }).then(data => {
    //   let pictures = data.results.map((pic) => {
    //     return (
    //       <div key = {pic.results}>
    //         <img src = {pic.picture.medium}> </img>
    //       </div>
    //     )
    //   })
    //   this.setState({pictures : pictures});
    //   console.log("state", this.state.pictures);
    // })
  }

  sweetalertZayro() {
    swal("Ton Prenom", {
      content: "input",
    })
    .then((value) => {
      if (value === "") {
        swal({
          icon: "warning",
          text:`Tu veux pas de dedicasse ?`
        });
      } else {
        swal({
          icon: "success",
          text:`Zayro te fais une dedicasse ${value}`
        });
      }
    });
  }

  sweetalertfunction() {
    if (this.state.total === 0) {
      this.reset(0)
    } else {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover your numbers!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! deleted!", {
            icon: "success",
          });
          this.reset(0)
        } else {
          swal("Your numbers are safe!");
        }
      });
    }
  }

  reset = (c) => {
    this.setState({
        total: 0,
        operator: "",
    })
  }  

  handlenumber(number){
    if (this.state.operator === "") {
        this.setState({
          total: number
        })
    } else {
      if (this.state.operator === "+") {
        let num = parseInt(number)
        this.setState({
            total: this.state.total + num 
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

    //if there is multiple number
    let num = parseInt(number)
    if (this.state.total !==0 && this.state.operator === "") {
      this.setState ({
        total: this.state.total * 10 + num
      })
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
        
        {/* <div className = "container2">
          <div className = "container1">
            {this.state.pictures}
          </div>
        </div> */}
      
         <table> 
         <tr> 
            <td colSpan="5" className="back0">{this.state.total}</td> 
         </tr> 

         <tr> 
            <CalculatorNumber number = "1" num = "1" handlenumber = {this.handlenumber.bind(this)}/>
            
            <CalculatorNumber number = "2" num = "2" handlenumber = {this.handlenumber.bind(this)}/>
            {/* <td onClick={() => {
              this.handlenumber(2)
              this.Multiplesnumber(2)
            }}> 2 </td>  */}
           <CalculatorNumber number = "3" num = "3" handlenumber = {this.handlenumber.bind(this)}/>

            <td className = "calculate" onClick={() => {
              this.operatornumber("/")
            }}> / </td> 
         </tr> 
         <tr> 
            <CalculatorNumber number = "4" num = "4" handlenumber = {this.handlenumber.bind(this)}/>

            <CalculatorNumber number = "5" num = "5" handlenumber = {this.handlenumber.bind(this)}/>

            <CalculatorNumber number = "6" num = "6" handlenumber = {this.handlenumber.bind(this)}/> 

            <td className = "calculate" onClick={() => {
              this.operatornumber("-")
            }}> - </td> 
         </tr> 
         <tr> 
           <CalculatorNumber number = "7" num = "7" handlenumber = {this.handlenumber.bind(this)} />

            <CalculatorNumber number = "8" num = "8" handlenumber = {this.handlenumber.bind(this)} /> 

            <CalculatorNumber number = "9" num = "9" handlenumber = {this.handlenumber.bind(this)} /> 

            <td className = "calculate" onClick={() => {
              this.operatornumber("+")
            }}> + </td> 
         </tr> 
         <tr> 
            <td id="made"> <button className = "zayro" onClick ={this.sweetalertZayro}>Made by Zayro </button> </td> 

            <CalculatorNumber className = "calculate"  number = "0" num = "0" handlenumber = {this.handlenumber.bind(this)}/>
            {/* <td className = "calculate" onClick={() => {
              this.handlenumber(0)
              this.Multiplesnumber(0)
            }}> 0 </td>  */}

            <td className = "calculate" onClick={() => {
              this.operatornumber("*")
            }}> * </td> 

            <td className = "calculate"><button className= "buttonforeset" onClick = {this.sweetalertfunction} > C </button></td>
            {/* <td> <button onClick = {this.sweetalertfunction}> my sweet alert button </button></td> */}
         </tr> 
      </table> 
      </div>
    );
  }
}


