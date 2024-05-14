import React from 'react';
import TemplateComponent from 'react-mustache-template-component'
import textfile from "./mustache.html";

const data = { name: 'Fred' };

function Mustache() {
  let [text, setText] = React.useState();

  // Loading the template as a file DOES NOT work:
  fetch(textfile)
    .then((response) => response.text())
    .then((textContent) => {
      setText(textContent);
    });

  // Using a text string as the template works:
  //text = "<p>Lorem ipsum <strong>{{name}}</strong> amet consectetur adipisicing elit.";

  return (
    <>
      <h1>Mustache</h1>
      <TemplateComponent template={text} data={data} />
    </>
  );
}

export default Mustache;
