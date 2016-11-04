import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MarkdownInput from './MarkdownInput'
class App extends Component {
  render() {
    return (
	  <div className="App"> 
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
        <h3>Ethan Suttner</h3>
        </div>
	  <MarkdownInput />
      </div>
    );
  }
}
export default App;
