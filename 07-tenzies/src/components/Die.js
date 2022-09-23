import Dot from './Dot'

export default function Die(props){
    function applyPattern(){
      let areas=[];
            for(let i=0; i<9; ++i){
             areas.push(
              <Dot
              full={props.pattern[i]} 
                  />   
             )
           }
         return areas  
    }
    const diePattern = applyPattern();
    return(
        <div className={`die ${props.isHeld ? 'held' : ""}`} onClick={props.holdDie}>
         {diePattern}
        </div>
    )
}