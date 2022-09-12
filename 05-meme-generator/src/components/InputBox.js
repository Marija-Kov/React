
export default function InputBox(props){

    return(
        <input placeholder={`input box ${props.num}`} name={`inputBox${props.num}`} onChange={props.handleChange}/>
    )
}