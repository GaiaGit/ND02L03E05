import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      echo: ''
    }
  }
  
  echoText = (text) => {
    this.setState(() => ({
      echo: text
    }))}
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input type="text" value={ this.state.echo } onChange={ (event) => this.echoText(event.target.value) } placeholder="Say Something" />
          <p className="echo">Echo: { this.state.echo }</p>
          <p>This should mirror the text you typed into the input field.</p>
        </div>
      </div>
    );
  }
}

export default App;
