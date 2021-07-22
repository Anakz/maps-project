import './App.css';
import Table_Utilisateurs from './components/table_utilisateurs/Table_Utilisateurs'
import Modale from './components/modal/Modale'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="App-body">

        <Modale />
        <h2 className="hh">Listes des utilisateurs</h2>
        <Table_Utilisateurs />

        </div>        
      </div>
    </div>
  );
}

export default App;
