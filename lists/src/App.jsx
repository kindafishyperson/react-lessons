import styled from 'styled-components';
import './App.css';
import React from 'react';
import UserList from './components/UserList';
import User from './components/User';

const Main = styled.main`
min-width: 100vw;
min-height:100vh;`;
function App() {
  const users = [
    new User({
      username: 'David123', firstName: 'David', lastName: 'Linus', id: 0,
    }),
    new User({
      username: '123J123', firstName: 'John', lastName: 'Huckleberry', id: 1,
    }),
    new User({
      username: 'Lol007', email: 'lol007@gmail.com', id: 2, dateOfBirth: new Date('07/07/2000').toDateString(),
    }),
    new User({
      username: 'NoFkingWay', firstName: 'Alice', lastName: 'Blue', email: 'idonthaveone@gmail.com', id: 3, dateOfBirth: new Date('01/03/1997').toDateString(),
    }),
    new User({
      username: 'TrashAccount', id: 4,
    }),
  ];
  return <Main><UserList users={users} /></Main>;
}

export default App;
