import React from 'react'
import InputBox from './InputBox';


export default function MemeForm(){

    const [meme, setMeme] = React.useState({
        box_count: 1,
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
       let num = Math.floor(Math.random()*len);
        setMeme(prev => {
            return {
                ...prev,
                box_count: allMemes[num].box_count,
                memeImage: allMemes[num].url
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

   function inputBoxes() {
       const boxes = [];
       for(let i=1; i<meme.box_count+1; ++i){
              boxes.push(<InputBox 
                           num={i}
                           handleChange={()=>handleChange}/>)
       } 
       return boxes  
   }


    return (
        <> 
        <form className="form" onSubmit={handleSubmit}>
            {inputBoxes()}
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