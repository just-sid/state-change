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
    let newNum = Math.floor(Math.random() * 10);
    this.setState({num: newNum});
  }

  render() {
    return (
      <div className="App">
        <Title num = {this.state.num} />
        <button onClick = {this.randomChange}>Click me</button>
      </div>
    );
  }
}


export default App;
