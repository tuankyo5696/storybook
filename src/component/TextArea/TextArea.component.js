import React,{useState} from 'react'


const Textarea = props => {
    const [value,setValue] = useState("");
    const onHandleChange = (e) => {
        let value = e.target.value;
        if (value.length === 97){
            value = value + "..."
        }
        setValue(value);
    }
    return(
        <>
            <textarea value = {value} onChange = {onHandleChange} maxLength = "100" />
        </>
    )
}

export default Textarea;