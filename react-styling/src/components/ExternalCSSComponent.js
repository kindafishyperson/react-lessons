import '../App.css';
import React from 'react';
import PropTypes from 'prop-types';

class ExternalCSSComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: props.text };
  }

  render() {
    const { text } = this.state;
    return <div className="RedBlock">{text}</div>;
  }
}
ExternalCSSComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ExternalCSSComponent;
