'use strict';

let React = require('react');

let error404 = props => {
  let { title, description, error } = props;
  
  return(
    <article>
      <header>
        <h1>{title}</h1>
      </header>
      <p>{description}</p>
      <hr/>
      <pre>
        <code>{error.stack}</code>
      </pre>
    </article>
  );
};

module.exports = error404;