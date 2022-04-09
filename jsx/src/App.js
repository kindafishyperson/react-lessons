import logoSrc from './logo.svg';
import './App.css';
function Button() {
  const roundedStyle = {
    borderRadius: '10px'
  }
  return <button style={roundedStyle}>Click me</button>
}
function Logo() {
  const logoStyle = {
    minWidth: '20vw',
    maxWidth: '40vw'
  }
  return <img src={logoSrc} alt="React logo" style={logoStyle}></img>
}
function App() {
  return <div className="App-header">Hello <Logo/> <Button/></div>
}

export default App;
