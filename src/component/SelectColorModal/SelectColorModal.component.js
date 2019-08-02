import React from "react";
import BaseSelectDialog from './../BaseSelectDialog/BaseSelectDialog.component';
import PropsConfig from './SelectColorModal.component.proptypes'

const SelectColorModal = props => {
 
  const onColorItemSelect = item => {
    const { selectedValue, onSelectColor } = props;
    if (item.value !== selectedValue.value) {
      onSelectColor(item);
    }
  };
  const renderItem = (colorItem, index) => {
    console.log(props.onSelectColor(colorItem))
    const { label, value, textColor } = colorItem;
    const { selectedValue } = props;
    const isSelected = value === selectedValue.value;
    return (
      <div
        key={`${label}-${index}`}
        onClick={onColorItemSelect(colorItem)}
        className="colorBlock"
        style={{ backgroundColor: value }}
      >
        <div
          className={`text ${isSelected && "active"}`}
          style={{ color: textColor }}
        >
          {label}
        </div>
      </div>
    );
  };
  const handlePreventDefaultClick = (e) => {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
  }

   const {title,onClose, colorArray} = props;
   const hasThreeColor = colorArray.length < 4;
   return(
       <BaseSelectDialog title = {title} onClose = {onClose}>
           <div className = {`modalContent ${hasThreeColor && "modalContentOneColumn"}`}>
               {colorArray.map(renderItem)}
           </div>
       </BaseSelectDialog>
   )
};
SelectColorModal.propTypes = PropsConfig.propTypes;
SelectColorModal.defaultProps = PropsConfig.defaultProps;
export default SelectColorModal;
