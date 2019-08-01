import PropTypes from 'prop-types';
import Constants from './../../constants/index';

const propTypes = {
    message: PropTypes.string,
    messageClassName: PropTypes.string,
    button: PropTypes.shape({
      text: PropTypes.string,
      onClick: PropTypes.func,
    }),
    onClose: PropTypes.func,
  };
  
  const defaultProps = {
    message: '',
    messageClassName: '',
    button: {
      text: 'BUTTON',
      onClick: Constants.NOOP,
    },
    onClose: Constants.NOOP,
  };
export default {
    propTypes,
    defaultProps
}