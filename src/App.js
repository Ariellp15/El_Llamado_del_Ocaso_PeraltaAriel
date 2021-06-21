import './App.css';
import {Home} from './pages/home/home'

function App() {
  const nameProject = 'El Llamado del Ocaso - Saga Online';
  return (
    <div className="App">
    <h1> Hola {nameProject}</h1>  
    <Home/>  
    </div>
  );
}

export default App;
