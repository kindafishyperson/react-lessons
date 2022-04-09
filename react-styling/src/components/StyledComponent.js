import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

class StyledComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: props.text };
    this.StyledDiv = styled.div`
    text-align: center;
    background-color: ${props.color};
    padding: 0.5em;
    border-radius: 0.5em;`;
  }

  render() {
    const { text } = this.state;
    const { StyledDiv } = this;
    return <StyledDiv>{text}</StyledDiv>;
  }
}
StyledComponent.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default StyledComponent;
