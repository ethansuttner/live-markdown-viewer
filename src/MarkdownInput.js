var React = require('react');

var MarkdownInput = React.createClass({
  render: function () {
    
    var pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    var navLinks = pages.map(function(page){
      return (
        <a href={'/' + page}>
          {page}
        </a>
      );
    });

    return (
	<div>
	<nav>{navLinks}</nav> 
	<input></input>
	</div>
	);
  }
});

module.exports = MarkdownInput;
