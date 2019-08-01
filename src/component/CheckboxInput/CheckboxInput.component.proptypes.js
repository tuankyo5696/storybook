import PropTypes from "prop-types";

import Constants from "./../../constants/index";

const propTypes = {
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func
};

const defaultProps = {
  className: Constants.EMPTY.STRING,
  labelClassName: Constants.EMPTY.STRING,
  label: "Label",
  value: Constants.EMPTY.STRING,
  name: Constants.EMPTY.STRING,
  onChange: Constants.NOOP,
  onClick: Constants.NOOP
};

export default {
    propTypes,
    defaultProps
}