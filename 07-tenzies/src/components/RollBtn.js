

export default function RollBtn(props){

  return (
      <div className='roll--btn' onClick={props.tenzies ? props.newGame : props.rollDice}>
       {props.tenzies ? 'Play again' : 'Roll'}
      </div>
  )
}