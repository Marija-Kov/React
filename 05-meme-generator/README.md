### Creating interactive React apps

#### Props vs. State

- Props are immutable and we should never attempt to modify them inside the body of a component. They are the data that the component is receiving "from above" in order for it to be displayed directly on a page or to configure the way something is displayed on a page.

- State refers to the values that the component can maintain between the render cycles. State is born and lives in the component and is managed/modified by the component - sort of like variables declared inside a function.

* React doesn't watch for local variable changes.

React.useState() --> [undefined, f()]
React.useState("Hello") --> ["Hello", f()]

- Whatever we pass to useState will be the default state.

* The convention for naming of f() is:  set+DefaultState.

const [greet, setGreet] = React.useState('hello');

console.log(greet) --> 'hello'

- When we want to change the (default) state, we call the setDefaultState('with new state as the parameter').

setGreet('Hi');

console.log(greet) --> 'Hi'

#### Array destructuring vs object destructuring
When destructuring an object, we have to use the exact property names. 
When destructuring arrays, we can use any names we want.