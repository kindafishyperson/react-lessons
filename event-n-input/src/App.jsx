import './App.css';
import React from 'react';
import styled from 'styled-components';
import LoginForm from './components/LoginForm';

const StyledMain = styled.main`
display:grid;
place-items:center;
height:100vh;
width:100vw;`;
function App() {
  return <StyledMain><LoginForm url="http://localhost:3000" /></StyledMain>;
}

export default App;
