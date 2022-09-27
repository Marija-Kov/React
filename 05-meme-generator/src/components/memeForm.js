import React from 'react'
import InputBox from './InputBox';
import OutputBox from './OutputBox'

export default function MemeForm(){
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    },[])

    const [extra, setExtra] = React.useState(0);
    const [allMemes, setAllMemes] = React.useState([]);
    const [meme, setMeme] = React.useState({
        box_count: 1,
        memeImage: "https://i.imgflip.com/24y43o.jpg"
    })
    const [inputTxt, setInputTxt] = React.useState({});
    function handleChange(event){
       const {name, value} = event.target;
       setInputTxt(prev=>{
           return {
               ...prev,
               [name]:value
              }
       })
       
       }

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
       setExtra(0);

       // Default input box number === meme.box_count
       // get every input instance with the id from `inputBox${meme.box_count+1 and over}`
       // and hide it
       
    }

   const handleSubmit = (event) => {
       event.preventDefault()
   }

   function inputBoxes() {
       const boxes = [];
       for(let i=1; i < meme.box_count+5; ++i){
              boxes.push(<InputBox
                          key={`inputBox${i}`} 
                          id={i}
                          handleChange={handleChange}
                          inputTxt={inputTxt}
                          boxCount={meme.box_count}
                          />
                          )
                         } 
       return boxes  
   }


  
   function outputBoxes(){
       const boxes = [];
       for(let i=1; i < meme.box_count+5; ++i){
              boxes.push( 
                  <OutputBox
                  key={`outputTxt${i}`} 
                  id={i}
                  inputTxt={inputTxt}
                  boxCount={meme.box_count}
                  />
                )
               } 
       return boxes  
   }
   function addInputBox(){
       let newInputBox = document.querySelector(`#inputBox${meme.box_count+extra}`);
       newInputBox.classList.remove('hidden');
       setExtra(prev => ++prev);
   }
   function hideExtras(){
       
   }
    return (
        <> 
        <form className="form" onSubmit={handleSubmit}>
            {inputBoxes()}
        </form>
        <button onClick={extra < 5 ? addInputBox : function(){}}>{extra < 5 ? "+ Extra input box" : "No more extra boxes! Plenty to work with anyway :}"}</button>
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