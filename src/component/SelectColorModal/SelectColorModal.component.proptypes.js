import PropTypes from 'prop-types';

import Constants from './../../constants/index';


const propTypes = {
    onSelectColor: PropTypes.func,
    title: PropTypes.string,
    onClose: PropTypes.func,
    colorArray: PropTypes.array,
    selectedValue: PropTypes.object
};

const defaultProps = {
    title: '',
    onClose: Constants.NOOP,
    onSelectColor: Constants.NOOP,
    colorArray: [],
    selectedValue: {},
}

export default {
    propTypes,
    defaultProps
}