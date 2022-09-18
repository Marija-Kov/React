import React from "react"
import Header from './components/Header'
import MemeForm from './components/MemeForm'
import './App.css';

function App() {
  console.log('App component rendered')
  return (
    <div className="container">
     <Header />
     <MemeForm />
    </div>
  );
}

export default App;
