import './App.css';
import Table_Utilisateurs from './components/table_utilisateurs/Table_Utilisateurs'
import Navbare from './components/navbar/Navbare';

function App() {
  return (
    <div className="App">
      
      <Navbare />
      <div className="App-header">
        <div className="App-body">

          
          <Table_Utilisateurs />

        </div>        
      </div>
    </div>
  );
}

export default App;
