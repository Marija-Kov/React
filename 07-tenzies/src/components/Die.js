
export default function Die(props){

    return(
        <div className={`die ${props.isHeld ? 'held' : ""}`}>
         <p>{props.value}</p>
        </div>
    )
}