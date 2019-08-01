import PropTypes from 'prop-types';
import Constants from './../../constants/index';

const propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};


const defaultProps = {
  className: '',
  title: 'Button',
  onClick: Constants.NOOP,
};

export default {
  propTypes,
  defaultProps,
};
