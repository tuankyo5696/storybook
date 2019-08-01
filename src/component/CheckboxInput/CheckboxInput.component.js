import React from 'react'
import './CheckboxInput.component.css';
import PropsConfig from './CheckboxInput.component.proptypes'
const CheckboxInput = props => {
    const {
        className,
        labelClassName,
        label,
        value,
        onChange,
        name,
        clicked,
        ...rest
      } = props;
      return (
        <div className={`input ${className}`} onClick={clicked}>
        <input
          name={name}
          type="checkbox"
          value={value}
          onChange={onChange}
          {...rest}
        />
        <label className={labelClassName}>{label}</label>
      </div>
      )
}
CheckboxInput.propTypes = PropsConfig.propTypes;
CheckboxInput.defaultProps = PropsConfig.defaultProps;

export default CheckboxInput;