import React from 'react';
import ReactDOM from 'react-dom';

// create component to produce some html
const App = () => {
  return <div>Hi!</div>
}

// take component's generated html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
