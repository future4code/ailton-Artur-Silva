import './App.css';
import Etapa1 from './components/Etapa1';
import { useState } from 'react';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

function App() {
 
 const [etapa, setEtapa] = useState(1)

 const trocarEtapa = () => {
    switch (etapa) {
      case 1:
        return <Etapa1/>;
      case 2:
        return <Etapa2/>;
      case 3:
        return <Etapa3/>;
      case 4:
        return <Final/>;
      default:
        return <Final/>;   
    }
  }
 const proximaEtapa = () => {
  setEtapa(etapa + 1)
 }
 
 
  return (
    <div className="App">
      {trocarEtapa()}
      {etapa < 4 ? <p><button onClick={proximaEtapa} > Próxima etapa</button></p> : null}
      
    </div>
  );
}

export default App;
