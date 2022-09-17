import './App.css';
import React from 'react';
import{nanoid} from "nanoid"
import Die from './components/Die'
import RollBtn from './components/RollBtn'

function App() {
const [diceVals, setDiceVals] = React.useState(allNewDiceVals(10,6));

 function allNewDiceVals(len, max){
 let arr = [];
 for (let i=0; i<len; ++i){
   arr.push({ id: nanoid(), value: Math.ceil(Math.random()*max), isHeld: false})
 }
 return arr
} 

function rollDice(){
 setDiceVals(allNewDiceVals(10,6))
}

const dice = diceVals.map(dieVal => <Die key={dieVal.id} value={dieVal.value} isHeld={dieVal.isHeld}/>);

  return (
    <main>
     <div className="dice--wrapper">
    {dice}
     </div> 
     <RollBtn rollDice={rollDice} />
    </main>
    
  );
}

export default App;
