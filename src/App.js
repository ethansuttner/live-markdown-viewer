import React from 'react';
import './App.css';
import MarkdownOutput from './MarkdownOutput'
import MarkdownInput from './MarkdownInput'
import {Jumbotron, Col, Row} from 'react-bootstrap'
let App = React.createClass({
  getInitialState: function () {
    return {
      userInput: `# *italics*
## **bold**
### ~~Strikethrough~~
#### <span style='color: red;'>red</span>
[Learn more markdown here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
\`\`\`javascript
var s = "Hello World";
alert(s);
\`\`\``
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
	  <div className="container App"> 
      <Row>
        <div className="App-header">
          <Col xs={12} xsOffset={0} >
            <Jumbotron className="jumbotron-banner">
              <h2>Welcome to Live Markdown Viewer</h2>
              <p>Practice Writing Markdown! A simple Here React</p>
            </Jumbotron>
            <Row>
              <Col xs={5}>
              <MarkdownInput handleInput={this.handleUserInput} input={this.state.userInput} />
              </Col>
              <Col xs={7}>
                <MarkdownOutput value={this.state.userInput} /> 
              </Col>
            </Row>
          </Col>
        </div>
      </Row>
    </div>
    );
  }
})
export default App;

