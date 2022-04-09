import React from 'react';
import ExternalCSSComponent from './components/ExternalCSSComponent';
import CSSInJSComponent from './components/CSSInJSComponent';
import StyledComponent from './components/StyledComponent';

function App() {
  return (
    <main className="App">
      <ExternalCSSComponent text="Im a component with external CSS!" color="red" />
      <CSSInJSComponent text="I'm a component with CSS-in-JS" color="green" />
      <StyledComponent text="I'm a styled component!" color="blue" />
    </main>
  );
}

export default App;
