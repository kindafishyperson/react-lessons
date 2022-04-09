import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import UserListEntry from './UserListEntry';

const List = styled.ul`
display: grid;
place-items: center;`;

function UserList(props) {
  const { users } = props;
  return (
    <List>
      {users.map((user) => {
        const {
          username, firstName, lastName, email, dateOfBirth, id,
        } = user;
        return (
          <UserListEntry
            key={id}
            username={username}
            firstName={firstName}
            lastName={lastName}
            email={email}
            dateOfBirth={dateOfBirth}
          />
        );
      })}
    </List>
  );
}
UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.instanceOf(User)).isRequired,
};
export default UserList;
