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

##### Array destructuring vs object destructuring
When destructuring an object, we have to use the exact property names. 
When destructuring arrays, we can use any names we want.


#### Changing state

- Use a callback function

- A state managed by one component can be passed as a prop to another component.

##### Parent component can pass the state it manages as a prop to a child 
by giving a prop to the instance of a child (ex. parentState) with the value of (parent's) state reference (ex. {object.property}). The child component can then access the state via props.parentState.
##### Parent component can let a child component manage its state
 by simply passing the function as the value of a child's prop (ex. handleEventProp) where the instance of the child component is created; the child component will have an actual event listener (ex. onClick) with the value of {props.handleEventProp} set up on one of its elements.

#### Derived vs unified state

- Each child component can be passed a parent's state as a prop that it can then manage within itself. This is called derived state.

But since the parent component already can manage its own state, passing it directly to the children creates another "source of truth", which is unnecessary and not ideal.

- A parent can pass a function** that lives within the parent to its child as a prop. Then, the child can run that function through the event listener attached to the child.

- ** - If the function takes in an argument that is a part of the parent's state, the child has to be granted access to the argument. This is also done by passing the argument to the child as a prop.

- ** - The function asking for an argument within the child component that it has been passed to needs to be wrapped in a callback before being passed to the event listener.


### React forms

#### Controlled Components

A good practice is to have React control the input, which, in html, controls its own state. This is accomplished by defining the input value attribute with the state as the value.

 value={state.propName}


 ### useEffect()

 useEffect() lets a component interact with an outside system while keeping its local state in sync with it.

 Some API, like fetch, cause React app to render infinitely. This is a side-effect. Fetch method is considered a side-effect because it originates outside the React app. 

 Anything that React is not in charge of - local storage, API, websockets - is a side-effect. Additionally, two states to keep in sync counts as a side-effect as well.

 A side-effect is prevented by passing it to the React.useEffect() as an argument wrapped in a callback, and passing a dependencies array as the second argument.
 The dependencies determine when the render will run - if the value changes (compared to some default state), the app re-renders.
 Passing an empty array will let the effect run only once after the first render.

 #### Fixing memory leak

When a component is unmounted from the DOM, an event listener that's attached to the window - browser's element - through the component may still listen for events. This is called memory leak and is fixed with useEffect cleanup function, which is a function returned by the callback (that is the first argument) inside useEffect parentheses. That function removes the event listener from the window element once the component is unmounted from the DOM.