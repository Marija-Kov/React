### NOTE: 
At the point where I tried to move the components in separate .js files, I ran into an issue when trying to import the said components to index.js ('require not defined...in babel.min.js') which made me believe that I've reached the limits of the CDN setup. Upon realizing that trying to solve this problem at this point would only serve to maximize my frustration and distract me from the purpose of doing the actual React course, I decided to restart the app with create-react-app in the simple-website subdirectory.

...


An easy setup for React project is done by copy-pasting these in the head of our html:

 <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
 <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
 <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script> 

https://reactjs.org/docs/cdn-links.html
 

So, why React over html+css+vanilla JS?

### 1. It's composable 
It allows us to create what are called components that can be reused in a more simple and clean fashion than copy-pasting the code. Copy-pasting static code is easy enough, but gets big and cluttered really fast.
React component is a function that returns a react element.

### 2. It's declarative 
As opposed to imperative programming where you're expected to write detailed instructions on how something should be done, React only needs to know what should be done. Just take a look at ReactDOM.render() vs document.createElement() etc. 


### 3. It's an in-demand skill!

### 4. It's maintained by high-skilled individuals.

### Hello JSX

Combines html and JS syntax that allows us to code in a declarative manner.
It's kind of like a function that returns an object (element). 
It's imported as React from "react", this is necessary if we're not using CDNs, and we won't be using them much.
