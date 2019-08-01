import React from 'react'
import imgLoading from './../../images/loading.gif';
import './Loading.component.css';
const Loading = props => {

    return(
        <div className ="loading-container">
            <img src = {imgLoading} className = "loading-img" alt ="loading"/>
        </div>
    )
}

export default Loading;