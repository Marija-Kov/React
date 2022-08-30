### Data-driven React app

Instead of hard-coded data, this app will use a database and a reusable component.

#### Components are made reusable with props.

function ComponentName(props){ 
 const {prop1, prop2, prop3...} = props;
 // code
}

- If we create n instances of <Component />, console.log(props) will log n objects.
#### Conditional rendering: 

{ prop1 && <div>{prop1}</div> } 

- The <div> will be rendered only if prop1 is provided (truthy) for the instance of the Component. 


* The JSX that we use to describe native DOM elements will be turned into real DOM elements by React. In other words, when we are writing JSX, we are telling React what we want to be built (declarative programming) and letting React build it for us. We are not creating any DOM elements directly by writing JSX.
So if we try to pass a custom prop to a native DOM element - something like <div customProp={poozh}> - it won't show 'poozh' because <div> simply doesn't have customProp specified in the HTML specification. 


#### The .map()

We can use map() method to create multiple instances of a Component by simply referencing the data we want to display as our props' values.

Component.js----
export default function Component({prop1, prop2}){
    return {
        <>
       <p>{prop1}</p> <p>{prop2}</p>
        </>
    }
}


App.js----
import Component from './Component';
import data from './data';

export default function App(){
  const showData = data.map(obj => {
      return(
          <Component
            prop1={obj.prop1} prop2={obj.prop2}
          />
      )
  })
  return (
      {showData}
  )
}

