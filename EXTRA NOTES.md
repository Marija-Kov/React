### On breaking ref use conventions

Consider the following code example:

// more imports
import {nanoid} from 'nanoid'; 

function App(){
 //some states
 const testRef = React.useRef(nanoid())

 console.log(testRef.current) // **

React.useEffect(()=>{
 //syncing some states

console.log(testRef.current) 

}, [some dependency]);

return (
    // some JSX
 )
}

 - nanoid() creates a unique string every time it's called, but since it's wrapped inside an object returned by useRef as the current property value, once the string has been created with the first render, console.log(testRef.current) within useEffect returns that same initial value every time the App re-renders. This as expected from the useRef hook. 

 - ** - However, running another console.log of testRef outside useEffect - i.e. during render - reveals that the testRef.current has had two different values at different points.

 - Running only one or more console logs during render will also give different testRef.current values.

 - Although I have no explanation for this currently, it is described as the pitfall in the docs: https://beta.reactjs.org/apis/react/useRef .

 - Since useRef is supposed to preserve values for later and not trigger re-render, simply don't poke at it to do something opposite if you know what's good for you and your App.
