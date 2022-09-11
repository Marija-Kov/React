//import memesData from "../memesData"
import React from 'react'

export default function MemeForm(){

    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        memeImage: "https://i.imgflip.com/24y43o.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    },[])

    console.log(allMemes)
    console.log(meme)
    const getMeme = () => {
       let len = allMemes.length;
        setMeme(prev => {
            return {
                ...prev,
                memeImage: allMemes[Math.floor(Math.random()*len)].url
            }
        })
        document.querySelector('.top-text').innerText ="";
        document.querySelector('.bottom-text').innerText =""
        
    }
   const handleChange = (event) => {
       const{name, value} = event.target;
       setMeme(prev => {
           return {
               ...prev,
               [name]: value 
           }
       })
   }

   const handleSubmit = (event) => {
       event.preventDefault()
   }


    return (
        <> 
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" placeholder="top text" name="topText" value={meme.topText} onChange={handleChange}/>
            <input type="text" placeholder="bottom text" name="bottomText" value={meme.bottomText} onChange={handleChange} />
        </form>

        <button onClick={getMeme}>Get a new meme image</button>
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