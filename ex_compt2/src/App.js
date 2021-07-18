import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react';
import AffB from './components/AffB/AffB';
import AffC from './components/AffC/AffC';

function App() {
  const [compte, setCompte] = useState(0);
  const [inte, setInte] = useState();
  const [etat, setEtat] = useState(0);

  const start = () => { 
    run();
    setEtat(1);//En cour
    setInte(setInterval(run, 1000));
  };

  
  const run = () => 
  {
    return setCompte(compte => compte+1);
  };

  const arreter = () =>
  {
    setEtat(2);//En pause
    clearInterval(inte);
  }

  const reinitialiser = () =>
  {
    setCompte(0);
    setEtat(0);//Départ
    clearInterval(inte);
  }

  const reprendre = () => start();


  return (
    <div className="App">
      <div className="App-header">
        <div className="App-body">

        
        <div >
          <AffC compte={compte}/>
          <AffB start={start} etat={etat} arreter={arreter} reinitialiser={reinitialiser} reprendre={reprendre}/>
        </div>

        </div>
      </div>
    </div>
  );
}

export default App;
