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

We can use map() method to create multiple instances of a Component by simply referencing the data we want to display as our props' values - we're converting an array of raw data into an array of JSX elements that React will turn into DOM elements that will be displayed on the page.

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

#### Cluttered Components

We can pass an entire {...obj} instead of passing each prop individually and avoid bulkiness.

data.map(obj => {
return (
    <Component
      key={obj.id}
      {...obj}
        />
)
})

This will require some changes in Component.js as well.

The Component props will have to have exactly the same names as data obj properties so that the mapping of the data into props is actually successful.

(Using destructured props before this point might get a React beginner confused and stuck in fixing the Component after replacing all the props with {...obj})

We won't be able to use destructured props and will have to use the dot notation as if we're getting nested values out of any object. Since in this case we're mapping {...obj}  (also typed as: obj={obj}) into the instance of the Component as props, as a result we can get any obj property using dot notation on props. Additionally, obj is not defined in Component.js so it should be clear that we need to use props to get to the individual prop values. 

<p>{props.title}</p> (props.title === obj.title)




