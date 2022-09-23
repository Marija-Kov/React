import './App.css';
import React from 'react';
import{nanoid} from "nanoid"
import Die from './components/Die'
import RollBtn from './components/RollBtn'
import Confetti from 'react-confetti'

function App() {
const [diceVals, setDiceVals] = React.useState(allNewDiceVals());
const [tenzies, setTenzies] = React.useState(false);

const patterns = [[0,0,0,0,1,0,0,0,0], 
                 [1,0,0,0,0,0,0,0,1], 
                 [1,0,0,0,1,0,0,0,1], 
                 [1,0,1,0,0,0,1,0,1], 
                 [1,0,1,0,1,0,1,0,1], 
                 [1,0,1,1,0,1,1,0,1]];

React.useEffect(() => {
  let held = diceVals.filter(die => die.isHeld);
  let allSame = diceVals.every(die => die.value === diceVals[0].value);
if (held.length === diceVals.length && allSame){
  setTenzies(true)
}
}, [diceVals]);

 function newDie(){
   return {
      id: nanoid(), 
      value: Math.ceil(Math.random()*6), 
      isHeld: false
   }
 }

 function allNewDiceVals(){
 let arr = [];
 for (let i=0; i<10; ++i){
   arr.push(newDie())
 }
 return arr
} 

function rollDice(){
 setDiceVals(prev => prev.map(die => {
   return (
     die.isHeld ? die : newDie()
   )
 }))
}

function newGame(){
  setDiceVals(prev => prev.map(die => newDie()))
  setTenzies(false)
}

function holdDie(id){
  setDiceVals(prev => prev.map(die =>{
    return (
      die.id === id ? 
      {...die, isHeld: !die.isHeld} :
      die
    )
  }))
  
}

const dice = diceVals.map(dieVal => {
  return(
<Die key={dieVal.id} 
     value={dieVal.value} 
     isHeld={dieVal.isHeld}
     pattern={patterns[dieVal.value-1]}
     holdDie={()=>holdDie(dieVal.id)}
     />
  )
});

  return (
    <>
    <main>
      {tenzies && <Confetti />}
      <div className="description">
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      </div>
     <div className="dice--wrapper">
    {dice}
     </div> 
     <RollBtn rollDice={rollDice} tenzies={tenzies} newGame={newGame}/>
    </main>
   </> 
  );
}

export default App;
