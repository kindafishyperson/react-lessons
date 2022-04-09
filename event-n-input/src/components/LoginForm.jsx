import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';
import CustomLabel from './CustomLabel';

const StyledForm = styled.form`
min-width: 20vw;
max-width: 40vw;
min-height: 15vh;
max-height: 40vh;
border: 2px solid grey;
border-radius: 0.5em;
place-items: center;
padding: 1em;
display: grid;`;

function LoginForm(props) {
  const { url } = props;
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const sendForm = (event) => {
    event.preventDefault();
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ login, password }),
    });
  };
  return (
    <StyledForm onSubmit={sendForm}>
      <CustomLabel text="Email" />
      <CustomInput type="email" onChange={setLogin} placeholder="Email" minlength={5} required />
      <CustomLabel text="Password" />
      <CustomInput type="password" onChange={setPassword} placeholder="Password" minlength={10} maxlength={30} required />
      <CustomButton text="Sign In" type="submit" />
    </StyledForm>
  );
}
LoginForm.propTypes = {
  url: PropTypes.string.isRequired,
};
export default LoginForm;
