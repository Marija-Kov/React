###### The notes for each previous project from this course are in README.md files in each project directory. These are the notes for Notes app that I followed along on Scrimba.


#### Saving/retrieving data to/from localStorage with React

const[notes, setNotes] = React.useState( 
    JSON.parse(localStorage.getItem("notes") || [] )  // - show notes if truthy, else, empty array

 - Since localStorage is outside React:

 React.useEffect(() => {
  localStorage.setItem("notes", JSON.stringify(notes))
 }, [notes])

 #### Lazy state initialization

 As code is above, React will reach into localStorage and re-render the App component on every single change of the notes state.

 This is prevented by simply wrapping the default state in a function and having it return the default state.

 const[notes, setNotes] = React.useState( 
   () => JSON.parse(localStorage.getItem("notes") || [] )


#### Passing down a function with more than one parameter 

Example: we want to fire the event on one specific element (out of many)

--App.js--

function doSomething(event, thingId){
    event.stopPropagation()  // if the target's parent has an event, too, this will prevent triggering it
   // some code
}
 // more code

return(

    <Component
       doSomething={doSomething}
    />
)

--Component.js--

export default Component(props){
    return{
        const elements = props.elements.map((element => {
        <div 
        onClick={(event) => props.doSomething(event, element.id)}
        ></div>
    }))
    }
}