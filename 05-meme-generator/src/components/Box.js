import React from 'react'

export default function Box(props){
   const styles = {
       backgroundColor: props.on ? "pink" : "yellow"
   }
    return (
        <div style={styles} 
             onClick={()=> props.toggle(props.id)} 
             className="box"
             ></div>
    )

}