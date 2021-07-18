import './App.css';
import React, {useState} from 'react';
import AffBtn from './components/DAffBtn/AffBtn';
import AffCompt from './components/DAffCompt/AffCompt';

function App() {

  //La variable fonction qui contient le temps
  const [time, setTime] = useState({ms: 0, s:0, m:0, h:0});

  const [inte, setInte] = useState();

  const [etat, setEtat] = useState(0);

  const start = () => { 
    run();
    setEtat(1);//en cour
    setInte(setInterval(run, 10));
  };

  //L'augmentation de temps
  var updatedH=time.h, updatedM=time.m, updatedS=time.s,updatedMs=time.ms;

  const run = () => 
  {
    if(updatedM === 60)
    {
      updatedH++;
      updatedM=0;
    }
    if(updatedS === 60)
    {
      updatedM++;
      updatedS=0;
    }
    if(updatedMs === 100)
    {
      updatedS++;
      updatedMs=0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  };

  //Arrêter le chrono
  const arreter = () => 
  {
    clearInterval(inte);
    setEtat(2);//pause
  };
  const reinitialiser = () => 
  {
    setTime({ms: 0, s:0, m:0, h:0})
    setEtat(0);//depart
    clearInterval(inte);
  };
  const reprendre = () => start();

  return (
    <div className="App">
      <div className="App-header">
        <div className="App-body">
          <AffCompt time={time}/>
          <AffBtn start={start} reprendre={reprendre} reinitialiser={reinitialiser} arreter={arreter} etat={etat}/>
          
        </div>
      </div>
    </div>
  );
}

export default App;
