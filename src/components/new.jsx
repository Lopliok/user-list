import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name + 2}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};