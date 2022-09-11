import React from "react"
import Header from './components/Header'
// import MemeForm from './components/MemeForm'
//import Form from './components/Output'
//import Starwars from './components/Output'
import WindowTracker from './components/Output'
import './App.css';

function App() {
  const[show, setShow] = React.useState(true)
  function toggle(){
    setShow(prev=> !prev)
  }
  console.log('App component rendered')
  return (
    <div className="container">
     <Header />
     <button onClick={toggle}>
        Toggle WindowTracker
      </button>
     {show && <WindowTracker />}
    </div>
  );
}

export default App;
