import React,{useState} from 'react';
import './App.css';
import AlertDialog from './component/AlertDialog/AlertDialog.component'
import TextArea from './component/TextArea/TextArea.component'
import CheckboxInput from './component/CheckboxInput/CheckboxInput.component'
const App = (props) =>  {
  const [value,setValue] = useState(false)
  const handleChange = () => {
    console.log(value)
    setValue(!value);
  }
  return (
    <>
    <AlertDialog />
    <TextArea />
    <div style={{ backgroundColor: "black", padding: "10px" }}>
      <CheckboxInput
        name="sameAsCurrent"
        label="Same As Current"
        value = {value}
        clicked = {handleChange}
        className={"singleCheckBox"}
        checked = {value}
      />
    </div>
    </>
  );
}

export default App;
