import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { containerClasses, TextField } from '@mui/material';
import { Container } from '@mui/material';
import { Alert } from '@mui/material';
import { Stack} from '@mui/material';
import { Transitions } from '@mui/material';


class guess extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      result: "",
      userinput: "",
    };
  }
   num = Math.floor(Math.random() * 100);
  handleAnswer(){
    if(this.state.userinput > this.num){
      this.setState({
        result: "High"
      })
    }else if(this.state.userinput < this.num){
      this.setState({
        result: "Low"
      })
    }else{
      console.log(this.num + "number")
      this.setState({
        result: "Correct"
      })
    }
    
  }

  render(){
    let button= <Alert severity="info">{this.state.result}</Alert>
    
     return(
        <div>
          <header>
      <h1>
        Guess a number between 0 and 100
        </h1>
        </header>
          
          <TextField
          onChange={event => {
            this.handleAnswer();
            this.setState({
              userinput: event.target.value
            })
            
            console.log(this.state.userinput);
            console.log(this.state.result);
            
          }}>
            value ={this.state.userinput}
            
          </TextField>

          {button}
        </div>
     )
  }
}


export default guess;
