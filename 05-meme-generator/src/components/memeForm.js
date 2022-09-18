import React from 'react'
//import {nanoid} from 'nanoid'
import InputBox from './InputBox';
import OutputBox from './OutputBox'

export default function MemeForm(){

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    },[])

    const [allMemes, setAllMemes] = React.useState([]);
    const [meme, setMeme] = React.useState({
        box_count: 1,
        memeImage: "https://i.imgflip.com/24y43o.jpg"
    })
    // inputTxt state as an object:
     const [inputTxt, setInputTxt] = React.useState({}); 
    function handleChange(event){
       const {name, value} = event.target;
       setInputTxt(prev=>{
           return {
               ...prev,
               [name]:value
              }
       })
       console.log(inputTxt[name])
       }

    // inoutTxt state as an array of objects with one key-value pair each:
    // const [inputTxt, setInputTxt] = React.useState([]); 

    //   function handleChange(event){
    //    const {name, value} = event.target;
    //    setInputTxt(prev=>{
    //        return [
    //            ...prev,
    //           {[name]: value}
    //        ]
    //    })
    //    console.log(inputTxt[name])

    function getMeme() {
       let len = allMemes.length;
       let num = Math.floor(Math.random()*len);
        setMeme(prev => {
            return {
                ...prev,
                box_count: allMemes[num].box_count,
                memeImage: allMemes[num].url
            }
        }) 
    }

   const handleSubmit = (event) => {
       event.preventDefault()
   }

   function inputBoxes() {
       const boxes = [];
       for(let i=1; i < meme.box_count+1; ++i){
              boxes.push(<InputBox 
                          id={i}
                          handleChange={handleChange}/>)
                         } 
       return boxes  
   }
  
   function outputBoxes(){
       const boxes = [];
       for(let i=1; i < meme.box_count+1; ++i){
              boxes.push( 
                  <OutputBox 
                  i={i}
                  inputTxt={inputTxt}
                  />
                           )
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
            <div className="meme-text">
            {outputBoxes()}
          </div>
            <img className="memeImg" src={meme.memeImage} alt="meme" />
        </div>
        </>
    )
}