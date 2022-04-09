import React from 'react';
import PropTypes from 'prop-types';

class CSSInJSComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: props.text, color: props.color };
  }

  render() {
    const { text, color } = this.state;
    return (
      <div style={{
        backgroundColor: color, textAlign: 'center', padding: '0.5em', borderRadius: '0.5em',
      }}
      >
        {text}
      </div>
    );
  }
}
CSSInJSComponent.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default CSSInJSComponent;
