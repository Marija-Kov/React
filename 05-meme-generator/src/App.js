
import Header from './components/Header'
import MemeForm from './components/MemeForm'
//import Form from './components/Output'
import Starwars from './components/Output'
import './App.css';

function App() {
  console.log('App component rendered')
  return (
    <div className="container">
     <Header />
     <Starwars />
    </div>
  );
}

export default App;
