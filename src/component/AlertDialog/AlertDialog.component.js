import React from "react";
import Button from './../Button/Button.component';
import PropsConfig from './AlertDiaglog.component.proptypes';
import './AlertDiaglog.component.css'
const AlertDialog = props => {
  const handleButtonClicked = () => {
    const { button, onClose } = props;
    onClose();
    button.onClick();
  };

  const handlePreventDefaultClick = e => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };
  const { message,  button } = props;
  return (
    <div className="container" onClick={handlePreventDefaultClick}>
      <span className="message">{message}</span>
      <Button
        className="buttonContainer"
        onClick={handleButtonClicked}
        title={button.text}
      />
    </div>
  );
};
AlertDialog.propTypes = PropsConfig.propTypes;
AlertDialog.defaultProps = PropsConfig.defaultProps;
export default AlertDialog;
