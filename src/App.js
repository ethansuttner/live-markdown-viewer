import React from 'react';
import logo from './logo.svg';
import './App.css';
import MarkdownOutput from './MarkdownOutput'
import MarkdownInput from './MarkdownInput'
let App = React.createClass({
  getInitialState: function () {
    return {
      userInput: ""
    };
  },
  handleUserInput: function (e) {
    var inputString = e.target.value;
    this.setState({
      userInput: inputString
    });
  },
  render() {
    console.log(this.state);
    return (
	  <div className="App"> 
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
        <h3>Ethan Suttner</h3>
        </div>
	  <MarkdownInput handleInput={this.handleUserInput} input={this.state.userInput} />
      <MarkdownOutput value={this.state.userInput} /> 
      </div>
    );
  }
})
export default App;
