import { nanoid } from 'nanoid';
import Dot from './Dot'

export default function Die(props){
    function applyPattern(){
      let areas=[];
            for(let i=0; i<9; ++i){
             areas.push(
              <Dot
              key={nanoid()}
              full={props.pattern[i]} 
                  />   
             )
           }
         return areas  
    }
    const diePattern = applyPattern();

    function handleClick(){
        props.holdDie()
        props.triggerCount() 
    }
    return(
        <div className={`die ${props.isHeld ? 'held' : ""}`} onClick={handleClick}>
         {diePattern}
        </div>
    )
}