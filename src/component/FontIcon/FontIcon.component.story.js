import React from "react";

import { storiesOf } from "@storybook/react";

import FontIcon from "./FontIcon.component";

storiesOf("FontIcon", module).add("default", () => (
  <div>
    <FontIcon icon={"ic_cart"} size={50} color={"#ff0000"} />
    <FontIcon icon={"ic_home"} size={50} color={"#ffff00"} />
    <FontIcon icon={"ic_cart"} size={50} color={"#ff00ff"} />
    <FontIcon icon={"ic_close"} size={50} color={"#000ff0"} />
    <FontIcon icon={"empty-list"} size={50} color={"#000ff0"} /> 
    <FontIcon icon={"picture"} size={50} color={"#000ff0"} />
    <FontIcon icon={"ok"} size={50} color={"#000ff0"} /> 
  </div>
));
