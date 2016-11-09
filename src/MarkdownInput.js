var React = require('react');
var ReactDOM = require('react-dom');
import {FormGroup, FormControl} from 'react-bootstrap'; 
let MarkdownInput = React.createClass ({
    componentDidMount: function() {
      ReactDOM.findDOMNode(this.refs.input).focus();
    },
    render: function () {
      var input = this.props.input;
      const MarkdownStyle = {
          height: input.split("\n").length*20 + 50
      };
      return (
    <div>
      <FormGroup controlId="formControlsTextarea">
        <FormControl controlId="Input Markdown Text" id="MarkdownInput" style={MarkdownStyle} ref="input" onChange={this.props.handleInput} value={input} componentClass="textarea" placeholder="Enter markdown input here..." />
      </FormGroup>
    </div>
    );
    }
  });

module.exports = MarkdownInput;
// <textarea id="input-text" type="text" onChange={props.handleInput} value={input}/>
