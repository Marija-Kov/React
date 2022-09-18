import React from "react"

export default function InputBox(props){
 const [inputTxt, setInputTxt] = React.useState({
     inputBox1: ""
 }); 

  console.log(inputTxt[`inputBox${props.id}`])

  function handleChange(event){
   const {name, value} = event.target;
   setInputTxt(prev=>{
       return {
           ...prev,
           [name]:value
       }
   })
   }
    return(
        <input 
          type="text" 
          placeholder={`input box ${props.id}`} 
          name={`inputBox${props.id}`} 
          onChange={handleChange}/>
    )
}