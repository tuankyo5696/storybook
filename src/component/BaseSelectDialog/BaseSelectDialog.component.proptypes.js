import PropTypes from 'prop-types';

import Constants from './../../constants/index';


const propTypes = {
    title: PropTypes.string,
    onClose: PropTypes.func,
}

const defaultProps = {
    title: "",
    onClose: Constants.NOOP
}

export default {
    propTypes,
    defaultProps
}