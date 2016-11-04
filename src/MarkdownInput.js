var React = require('react');
var marked = require('marked');
var MarkdownInput = React.createClass({
  getInitialState: function () {
    return {
      userInput: "",
      markedDownOutput: ""
    };
  },
  handleUserInput: function (e) {
    var inputString = e.target.value;
    this.setState({
      userInput: inputString,
      markedDownOutput: marked(inputString) 
    });
  },

  render: function () {   
    var output = this.state.markedDownOutput;
    return (
      <div>
        <textarea id="input-text" type="text" onChange={this.handleUserInput} value={this.state.userInput}/>
        <div class="output-markdown" dangerouslySetInnerHTML={{__html: output}} />
      </div>
    );
  }
});

module.exports = MarkdownInput;
