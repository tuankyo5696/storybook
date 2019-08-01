import React from "react";

import { storiesOf } from "@storybook/react";

import AlertDialog from "./AlertDialog.component";

storiesOf("AlertDialog", module).add("default", () => (
  <AlertDialog
    message="Do you want to build a Snowman ?"
    button={{ text: "OK" }}
  />
));
