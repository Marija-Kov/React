
export default function Counter(props){ 

    return(
        <p className="counter">
            <span>{props.minutes}</span>
            :
            <span>{props.seconds < 10 ? 
            `0${props.seconds}` :
             props.seconds}
            </span></p>
    )
}