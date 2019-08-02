import React from "react";

import { storiesOf } from "@storybook/react";

import SelectColorModal from "./SelectColorModal.component";
import { withState } from "@dump247/storybook-state";
const colorArray3 = [
  {
    label: "Red",
    value: "#ff0000",
    textColor: "#ffffff"
  },
  {
    label: "Yellow",
    value: "#ffff00",
    textColor: "#000000"
  },
  {
    label: "Green",
    value: "#00ff00",
    textColor: "#ffffff"
  }
];

const colorArray4 = [
  {
    label: "Black",
    value: "#000000",
    textColor: "#ffffff"
  },
  {
    label: "Red",
    value: "#ff0000",
    textColor: "#ffffff"
  },
  {
    label: "Yellow",
    value: "#ffff00",
    textColor: "#000000"
  },
  {
    label: "Green",
    value: "#00ff00",
    textColor: "#ffffff"
  }
];
// .add("test", withState({value: false}) (({store})=>(
//     <div style={{ backgroundColor: "black", padding: "10px" }}>
//     <CheckboxInput
//     {...store.state}
//       name="sameAsCurrent"
//       label="Same As Current"
//       value = {store.state.value}
//       clicked = {() => store.set({value: !store.state.value})}
//       className={"singleCheckBox"}
//       checked = {store.state.value}
//     />
//   </div>

storiesOf("SelectColorModal", module)
  .add("default", () => <SelectColorModal />)
  .add(
    "has three colors",
    withState({ selectedValue: colorArray3[1] })(({ store }) => (
      <SelectColorModal
        {...store.state}
        title="Safety Result"
        colorArray={colorArray3}
        selectedValue={store.state.selectedValue}
        onSelectColor={(newValue) => store.set({ selectedValue: newValue })}
      />
    )),
  )
  .add("active second color", () => (
    <SelectColorModal
      title="Safety Result"
      colorArray={colorArray4}
      selectedValue={colorArray4[2]}
    />
  ));
