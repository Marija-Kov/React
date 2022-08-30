### Data-driven React app

Instead of hard-coded data, this app will use a database and a reusable component.

Components are made reusable with props.

 - function Component(props)
 const {prop1, prop2, prop3...} = props;

 - If we create n instances of <Component />, console.log(props) will log n objects.

* The JSX that we use to describe native DOM elements will be turned into real DOM elements by React. In other words, when we are writing JSX, we are telling React what we want to be built (declarative programming) and letting React build it for us. We are not creating any DOM elements directly by writing JSX.
So if we try to pass a custom prop to a native DOM element - something like <div customProp={poozh}> - it won't show 'poozh' because <div> simply doesn't have customProp specified in the HTML specification. 