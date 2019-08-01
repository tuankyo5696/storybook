import React from "react";

import { storiesOf } from "@storybook/react";
import CheckboxInput from "./CheckboxInput.component";
import { withState } from '@dump247/storybook-state';


storiesOf("CheckboxInput", module)
  .add("default", () => (
    <div style={{ backgroundColor: "black", padding: "10px" }}>
      <CheckboxInput />
    </div>
  ))
  .add("Same as Current (Checked)", () => (
    <div style={{ backgroundColor: "black", padding: "10px" }}>
      <CheckboxInput
        name="sameAsCurrent"
        label="Same As Current"
        checked={true}
        className={"singleCheckBox"}
      />
    </div>
  ))
  .add("Same as Current (Unchecked)", () => (
    <div style={{ backgroundColor: "black", padding: "10px" }}>
      <CheckboxInput
        name="sameAsCurrent"
        label="Same As Current"
        checked={false}
        className={"singleCheckBox"}
      />
    </div>
  ))
  .add("test", withState({value: false}) (({store})=>(
    <div style={{ backgroundColor: "black", padding: "10px" }}>
    <CheckboxInput
    {...store.state}
      name="sameAsCurrent"
      label="Same As Current"
      value = {store.state.value}
      clicked = {() => store.set({value: !store.state.value})}
      className={"singleCheckBox"}
      checked = {store.state.value}
    />
  </div>
  )) );
