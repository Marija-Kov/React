### Building tenzies game from scratch
#### Functionality overview

- Every time the dice are rolled, each of them receives a value (random number 1-6 inclusive) and a function (holdDie(id)) that switches the value of isHeld (boolean, false by default)  from an array of objects that are passed from the App to every instance of Die (via map method).

- When a die is clicked, the value of isHeld property of the target die id is switched to the opposite of the previous value.

- if isHeld is set to true, the die is coloured green and it won't roll with the rest of the dice.

- Once all dice are held and all of them have the same value (this is resolved within useEffect), the game is won, the button text changes and the confetti are rendered.

- Once Play again is clicked, the game is restarted.
### Adding features 
#### Building traditional dice look

- Every die side can be represented as a 3 x 3 grid where specific areas (more specifically the divs that are placed in the areas) are filled depending on which number it is supposed to show.

- Considering the traditional die look, an array of 6 patterns can be made that consists of 9 zeros and ones.

- Ones represent black, zeros represent transparent dots in the grid.

- The pattern is passed from the app to the dice and mapped into each dot (div) in every die.

- The Dot component receives the value (0 or 1) and decides whether it should render with className that gives it background colour.

#### Adding timer/counter

- Creating a Counter component that receives minutes and seconds as props.

- In the App, states: seconds, minutes and counting are introduced.

- Seconds are updated with setInterval method and reset at the value 59, when the minutes are updated also (incremented by 1).

- Since this involves syncing multiple different states, it's put within a useEffect and the states are added in the list of dependencies. 

- useEffect returns a callback that clears the count interval after every render, otherwise seconds are incremented by 2 every second. * By clearing the interval after every render and resetting it, setSeconds is guaranteed to take the correct prev value of seconds.(At least that's the way I get it at this point and console logging "set"/"cleared" within setInterval and clearInterval demonstrates it.) 

- Once tenzies are accomplished, the interval is cleared/the counting stops at the last value.

- Once the game is restarted, the timer is reset to 0:00 and doesn't start until counting state is set to true.

- Counting state is set to true once a die is clicked. For this purpose, setCounting(true) is wrapped in a function that is passed to Die as a prop.

- Since at this point the click event on the Die component triggers 2 functions, they are both wrapped in a function that is then passed as the value to onClick event.  

