
export default function Die(props){

    return(
        <div className={`die ${props.isHeld ? 'held' : ""}`} onClick={props.holdDie}>
         <p>{props.value}</p>
        </div>
    )
}