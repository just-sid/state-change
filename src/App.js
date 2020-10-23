import React, { Component } from 'react';
import './App.css';
import { Title } from './Title/Title.component';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 1,
      isSeven: false,
    };
  }


  randomChange = () => {
    let newNum = Math.floor(Math.random() * 10) + 1;
    this.setState({num: newNum});
    if(newNum === 7)
    this.setState({isSeven: true});
  }
  

  render() {
    return (
      <div className="App">
        <Title num = {this.state.num} />
        {this.state.isSeven 
         ? <h2>YOU WIN!</h2>
         : <button onClick = {this.randomChange}>Random Number</button>
        }
      </div>
    );
  }
}


export default App;
