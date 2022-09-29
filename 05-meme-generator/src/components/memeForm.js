import React from 'react'
import InputBox from './InputBox';
import OutputBox from './OutputBox'

export default function MemeForm(){
    const [allMemes, setAllMemes] = React.useState([]);
    const [meme, setMeme] = React.useState({
        box_count: 2,
        memeImage: "https://i.imgflip.com/8k0sa.jpg"
    })
    const [extra, setExtra] = React.useState(1); // because first extra box id is always higher by 1 than the default number of boxes 
    const [inputTxt, setInputTxt] = React.useState({inputBox1:"", inputBox2:"", inputBox3:"", inputBox4:"", inputBox5:"", inputBox6:""});

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    },[]);
    
    React.useEffect(()=> {
        setInputTxt(inputTxt => {
         for(let i=1; i<meme.box_count+5; ++i){
           inputTxt[`inputBox${i}`] = "";
         }  
         return inputTxt 
        })       // once the user gets a new meme template, the previously typed text will remain...
    }, [meme]);  // ...but will be gone once the user starts typing again.

    React.useEffect(()=> {
        let allInput = document.querySelectorAll('input');
        allInput.forEach(e => {
           let eId = e.getAttribute('id');
           let idNum = eId.slice(8, eId.length+1); // 8 is the index of the 'x' character of the input id, after which comes a number we're looking for
           if (idNum > meme.box_count){ 
              // Making sure that only default input boxes are shown for the current meme and the extras are hidden...
               e.setAttribute('class', "hidden");
           }
        })
    }, [meme]); // ...after every meme state change. 

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
        setExtra(1);
    }

    function handleChange(event){
       const {name, value} = event.target;
       setInputTxt(prev=>{
           return {
               ...prev,
               [name]:value
              }
       })
       };

    const handleSubmit = (event) => {
       event.preventDefault()
    };

   function inputBoxes() {
       const boxes = [];
       for(let i=1; i < meme.box_count+5; ++i){  // max number of input boxes : meme.box_count+4 (extra number of boxes is arbitrary)
              boxes.push(<InputBox
                          key={`inputBox${i}`} 
                          id={i}
                          handleChange={handleChange}
                          inputTxt={inputTxt}
                          boxCount={meme.box_count}
                          className={i > meme.box_count ? "hidden" : ""} // moving the ternary expression outside the InputBox component solved the problem of extra boxes not disappearing on get new meme
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
  
   function outputBoxes(){
       const boxes = [];
       for(let i=1; i < meme.box_count+5; ++i){
              boxes.push( 
                  <OutputBox
                  key={`outpuTxt${i}`} 
                  id={i}
                  inputTxt={inputTxt}
                  boxCount={meme.box_count}
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
        <button className="extra" onClick={extra < 5 ? addInputBox : function(){}}>{extra < 5 ? "+ Extra input box" : "No more extra boxes! Plenty to work with anyway :}"}</button>
        <button onClick={getMeme}>Get a new meme template</button>
        <div className="output">
            <div className="meme-text">
            {outputBoxes()}
          </div>
            <img className="memeImg" src={meme.memeImage} alt="meme" />
        </div>
        </>
    )
}