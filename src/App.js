import React from 'react';
import './App.css';
import MarkdownOutput from './MarkdownOutput'
import MarkdownInput from './MarkdownInput'
import {Jumbotron, Col, Row} from 'react-bootstrap'
let App = React.createClass({
  getInitialState: function () {
    return {
      userInput: "**this** is a *cool* <span style='color: red;'>test</span>"
    };
  },
  handleUserInput: function (e) {
    var inputString = e.target.value;
    this.setState({
      userInput: inputString
    });
      // <img src={logo} className="App-logo" alt="logo" />
  },
  render() {
    return (
	  <div className="App"> 
      <Row>
        <div className="App-header">
          <Col xs={10} xsOffset={1} >
            <Jumbotron className="jumbotron-banner">
              <h2>Welcome to Live Markdown Viewer</h2>
              <p>This is a simple app built with React</p>
            </Jumbotron>
            <MarkdownInput handleInput={this.handleUserInput} input={this.state.userInput} />
            <MarkdownOutput value={this.state.userInput} /> 
          </Col>
        </div>
      </Row>
    </div>
    );
  }
})
export default App;

