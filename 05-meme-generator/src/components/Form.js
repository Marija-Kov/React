import memesData from "../memesData"
import React from 'react'

export default function Form(){

    const [meme, setMeme] = React.useState({
        topText:"...",
        bottomText:"...",
        memeImage: "https://i.imgflip.com/24y43o.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    const getMemeImage = () => {
       let len = allMemeImages.data.memes.length;
        setMeme(prev => {
            return {
                ...prev,
                memeImage: allMemeImages.data.memes[Math.floor(Math.random()*len)].url
            }
        })
    }

    return (
        <> 
        <div className="form" >
            <input type="text" placeholder="top text" />
            <input type="text" placeholder="bottom text" />
            <button onClick={getMemeImage}>Get a new meme image</button>
          
        </div>
        <div className="output">
            <img className="memeImg" src={meme.memeImage} alt="meme" />
          <div className="meme-text">
            <p className="top-text">{meme.topText}</p>
            <p className="bottom-text">{meme.bottomText}</p>
          </div>
        </div>
        </>
    )
}