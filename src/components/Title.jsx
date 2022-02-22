import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <section>
        <h2>{ headline }</h2>
      </section>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
