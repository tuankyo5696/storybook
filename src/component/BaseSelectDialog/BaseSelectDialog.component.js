import React from 'react'
import PropConfig from './BaseSelectDialog.component.proptypes';
import './BaseSelectDialog.component.css'
import FontIcon from './../FontIcon/FontIcon.component';
const BaseSelectDialog = (props) => {
    const handlePreventDefaultClick = (e)=>{
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }
    const {title,onClose,children} = props;
    return(
        <div className = "wrapper">
            <div className = "container" onClick={handlePreventDefaultClick} >
                <span className ="modalHeader">
                    {title}
                    <span onClick = {onClose}>
                        <FontIcon icon = {"ic_close"} size={18} color = {'#00b142'} />
                    </span>
                </span>
                {children}
            </div>
        </div>
    )
}
BaseSelectDialog.propTypes =  PropConfig.propTypes;
BaseSelectDialog.defaultProps = PropConfig.defaultProps;

export default BaseSelectDialog;