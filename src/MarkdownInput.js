var React = require('react');
function MarkdownInput(props) {
    var input = props.input;
    return (
      <div>
        <textarea id="input-text" type="text" onChange={props.handleInput} value={input}/>
      </div>
    );
};

module.exports = MarkdownInput;
