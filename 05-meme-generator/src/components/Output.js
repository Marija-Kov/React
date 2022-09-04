import React from "react"
import Star from "./Counter";
export default function Output(){
const [count, setCount] = React.useState(0);

  const add = () => {
     setCount(prev => prev + 1)
  }
  const subtract = () => {
    setCount(prev => prev - 1)
  }

   const toggle = () => {
      setContact(prev => { 
          return {
              ...prev,
          isFavorite: !prev.isFavorite
         }
        })
    }
  const [contact, setContact] = React.useState({
    firstName: "Poozh", phone: "12345", isFavorite: true
  })


    return (
        <div className="wrapper">
            <button onClick={subtract}>Subtract</button>
            <button onClick={add}>Add</button>
            <Star 
            {...contact}
            isFilled={contact.isFavorite} 
            handleClick={toggle}/>
         
        </div>
    )
}