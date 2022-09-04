import React from 'react'

export default function Star(props){
    let starIcon = props.isFilled ? "YES" : "NO";
   console.log("child changed parent's state")
    return (
        <div className="counter">
            <h1 onClick={props.handleClick}>{starIcon}</h1>
        </div>
    )
}