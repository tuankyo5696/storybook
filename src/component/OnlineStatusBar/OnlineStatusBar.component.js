import React, { useState, useEffect } from "react";
import { isNullOrUndefined } from "./../../util/helper";
import Constants from './../../constants/index';
import PropsConfig from './OnlineStatusBar.component.proptypes';
import './OnlineStatusBar.component.css'
const OnlineStatusBar = props => {
  const [online, setOnline] = useState(false);
  const bindConnectionOnchange = () => {
    window.navigator.connection.onchange = () => {
      connectionChange();
    };
  };
  const connectionChange = () => {
    if (
      !isNullOrUndefined(window.navigator.connection) &&
      !isNullOrUndefined(window.navigator.connection.rtt) && props.connect
    ) {
      setOnline(
        window.navigator.connection.rtt > Constants.STATUS_BAR.OFFLINE_KBPS
      );
    } else {
      setOnline(window.navigator.online);
    }
  };
  useEffect(() => {
    if (!isNullOrUndefined(window.navigator.connection)) {
      bindConnectionOnchange();
    }
    setInterval(connectionChange(), Constants.STATUS_BAR.INTERVAL);
  });
  const style = online ? "online" : "offline";
  const message = online
    ? Constants.STATUS_BAR.ONLINE_TEXT
    : Constants.STATUS_BAR.OFFLINE_TEXT;
  return (
    <div>
      <div className={`status ${style}`}>{message}</div>
    </div>
  );
};

OnlineStatusBar.propTypes = PropsConfig.propTypes;
OnlineStatusBar.defaultProps = PropsConfig.defaultProps;
export default OnlineStatusBar;
