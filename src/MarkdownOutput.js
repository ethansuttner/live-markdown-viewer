var React = require('react');
var marked = require('marked');

function MarkdownOutput(props) {
 var output = marked(props.value);
 return <div className="output-markdown" dangerouslySetInnerHTML={{__html: output}} />;
}
module.exports = MarkdownOutput;
