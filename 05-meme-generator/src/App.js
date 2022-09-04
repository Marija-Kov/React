
import Header from './components/Header'
//import Form from './components/Form'
 import Output from './components/Output'
import './App.css';

function App() {
  console.log('App component rendered')
  return (
    <div className="container">
     <Header />
   
     <Output />
    </div>
  );
}

export default App;
