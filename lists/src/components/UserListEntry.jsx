import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const EntryStyle = `
text-align: center;
border: 1px solid grey;
padding: 0.5em;`;
const ListEntry = styled.li`
display: flex;`;
const InfoEntry = styled.div`${EntryStyle}`;
const FirstInfoEntry = styled.div`
${EntryStyle}
border-radius: 0.5em 0 0 0.5em;`;
const LastInfoEntry = styled.div`
${EntryStyle}
border-radius: 0 0.5em 0.5em 0;`;
function UserListEntry(props) {
  const {
    username, firstName, lastName, email, dateOfBirth,
  } = props;
  return (
    <ListEntry>
      <FirstInfoEntry>{username}</FirstInfoEntry>
      <InfoEntry>{firstName}</InfoEntry>
      <InfoEntry>{lastName}</InfoEntry>
      <InfoEntry>{email}</InfoEntry>
      <LastInfoEntry>{dateOfBirth}</LastInfoEntry>
    </ListEntry>
  );
}
UserListEntry.propTypes = {
  username: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
};
export default UserListEntry;
