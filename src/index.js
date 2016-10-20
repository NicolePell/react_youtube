import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// create component to produce some html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// take component's generated html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
