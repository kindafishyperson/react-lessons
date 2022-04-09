import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  const style = {
    padding: '40px',
    textAlign: 'center',
  };
  return <div style={style}>Manual Setup!</div>;
}
ReactDOM.render(<App />, document.getElementById('app'));
