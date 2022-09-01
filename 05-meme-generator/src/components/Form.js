//import memesData from "../memesData"
import React from 'react'
export default function Form(){
const [text, func] = React.useState('Bottom Text')
    return (
        <>
        <div className="form" >
            <input type="text" placeholder="top text" />
            <input type="text" placeholder="bottom text" />
            <button>Get a new meme image</button>
        </div>
        <div className="output">
            <img className="memeImg" src="" alt="meme" />
          <div className="meme-text">
            <p className="top-text">TOP TEXT</p>
            <p className="bottom-text">{text}</p>
          </div>
        </div>
        </>
    )
}