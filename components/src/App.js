/* eslint-disable no-alert */
import './App.css';
import React from 'react';

const buttonStyle = {
  borderRadius: '10px',
  backgroundColor: 'cyan',
};
function FuncButton(props) {
  const { text } = props;
  const clickCallback = () => alert(text);

  return <button style={buttonStyle} type="button" onClick={clickCallback}>{text}</button>;
}
FuncButton.propTypes = {
  text: String,
};
FuncButton.defaultProps = {
  text: 'Just a button',
};
class ClassButton extends React.Component {
  constructor(props) {
    super();
    this.text = props.text;
    this.style = buttonStyle;
    this.element = <button style={this.style} type="button" onClick={this.clickCallback}>{this.text}</button>;
  }

  clickCallback = () => {
    alert(this.text);
  };

  render() {
    return this.element;
  }
}
ClassButton.propTypes = {
  text: String,
};
ClassButton.defaultProps = {
  text: 'Just a button',
};
function App() {
  const appStyle = {
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
    minWidth: '100vw',
    minHeight: '100vh',
  };
  const funcButton = <FuncButton text="I'm a function component" />;
  const classButton = <ClassButton text="I'm a class component" />;
  return (
    <main style={appStyle}>
      {funcButton}
      {classButton}
    </main>
  );
}

export default App;
