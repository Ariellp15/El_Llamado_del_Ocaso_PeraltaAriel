import './App.css';
import {NavBar} from './components/navBar/navBar'

function App() {
  const nameProject = 'El Llamado del Ocaso - Saga Online';
  return (
    <div className="App">
    <h1> Hola {nameProject}</h1>  
    <NavBar/>  
    </div>
  );
}

export default App;
