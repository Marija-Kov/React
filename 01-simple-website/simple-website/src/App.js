import './App.css';
import React from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

function App() {
 const [mode, setMode] = React.useState("dark")

 function toggle(){
   setMode(prev => {
    return  prev === "dark" ? "light" : "dark"
   })
 }
  return (
    <>
 <Header
   mode={mode}
   toggle={toggle} />
 <MainContent 
   mode={mode}
   />
 <Footer
   mode={mode} />
    </>
  );
}

export default App;
