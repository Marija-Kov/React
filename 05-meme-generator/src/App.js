
import Header from './components/Header'
//import memeForm from './components/memeForm'
import Form from './components/Output'
import './App.css';

function App() {
  console.log('App component rendered')
  return (
    <div className="container">
     <Header />
     <Form />
    </div>
  );
}

export default App;
