import React from 'react';
import TemplateComponent from 'react-mustache-template-component'
import textfile from "./mustache.html";

const data = { name: 'Fred' };

function Mustache() {
  let [text, setText] = React.useState();

  // @j3lte: You should wrap fetch in a useEffect
  React.useEffect(() => {
    // Loading the template as a string DOES work:
    fetch(textfile)
      .then((response) => response.text())
      .then((textContent) => {
        setText(textContent);
      });
  }, []);

  // Using a text string as the template works:
  //text = "<p>Lorem ipsum <strong>{{name}}</strong> amet consectetur adipisicing elit.";

  // @j3lte: Conditionally render the component, only when template is defined...
  return (
    <>
      <h1>Mustache</h1>
      { text ? 
      <TemplateComponent template={text} data={data} />
      : <p>Loading...</p>
      }
    </>
  );
}

export default Mustache;
