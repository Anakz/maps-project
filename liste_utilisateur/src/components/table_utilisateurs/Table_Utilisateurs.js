import React,{useState,useEffect} from 'react'
import './Table_Utilisateurs.css'

//Modale pour visualiser
import VisualiserModal from '../visualiserModal/VisualiserModal';

//Modale.js
import Modale from '../modal/Modale';

//Avatar
import Avatare from '../avatare/Avatare';

//Button
import {Button} from '@material-ui/core'

//icone font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons'


function createData(id ,name, email, DateNai, image) {
  return { id ,name, email, DateNai, image };
}

//Exemple inutile array
const fruits = [{id:"Banana", nome:"Orange", email:"Apple", date:"Mango"}];

//Notre tableau
const rows = 
[
];

function Table_Utilisateurs() {

    //Les 6 variables de type state (id, name, email,date naissance, image)
    const [id, setId] = useState()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [dateNai, setDateNai] = useState('')
    const [image, setImage] = useState('')

    //une variable pour savoir si le tableau est vide ou non
    const [tableVide, setTableVide] = useState(true)
  
  //importer les coordonnées depuis le component 'Modale.js' avec la methode useEffect
  const remplirTableau =(idd,n,e,d,i)=>
  {
    setId(idd)
    setName(n);
    setEmail(e)
    setDateNai(d)
    setImage(i);

    if (idd && n && e && d) 
    {
      setTableVide(true)//savoir que le tableau est vide
      rows.push(createData(id, n, e, d, i))
    }
  }

  //Function pour supprimer une ligne précise
  const handleDelete = (userId) =>
  {
    /*{rows.map((row) => { 
     if (row.id!== userId) {
        //row.pop(userId)
        //rows.pop(userId)
        rows.push(createData(row.id,row.name,row.email,row.dateNai,row.image))
     }
     var array = [...this.state.people]; // make a separate copy of the array
  var index = array.indexOf(e.target.value)
  array.splice(index, 1);
  this.setState({people: array});
    })}
    //delete rows[userId]
    var elementsSupprimes = rows.splice(userId, 1);
    rows=[elementsSupprimes]*/
  }

  //Visualiser un utilisateur à l'aide d'un Modale
  const [open, setOpen] = useState(false)

  const [coordone, setCoordone] = useState({id : 0,name:'', email:'', dateNai:'', image:''})

  const visualiser = (UId,Uname,Uemail,Udate,Uimage) =>
  {
    setCoordone({id: UId , name: Uname , email: Uemail , dateNai: Udate, image: Uimage})
    //e.preventDefault();pour ne pas actualisé la page
    inverserOpen(open)
  }
  const inverserOpen = () =>
  {
    setOpen(!open);
  }

  return (
    <div>
      <VisualiserModal inverserOpen={inverserOpen} coordone={coordone} open={open} />

      <Modale  remplirTableau={remplirTableau}/>
      <h2 className="hh">Listes des utilisateurs</h2>

      <table className="t" aria-label="customized table" >
        <thead>
        {!tableVide?<h5 className="tableVide" >Aucune information pour l'instant</h5> :
          <tr className="tete">

            <th className="hautLigne-img" ></th>

            <th className="hautLigne-name" ><h5><b>Nom complet</b></h5></th>

            <th className="hautLigne-email" ><h5><b>E-mail</b></h5></th>

            <th className="hautLigne-date" ><h5><b>Date Naissance</b></h5></th>

            <th className="hautLigne-action" ><h5><b>Action</b></h5></th>

          </tr>}
        </thead>
        <tbody>
        {!tableVide?'' :

          rows.map((row) => (

            <tr key={row.id} className="ligne">
              <td className="column-img">
                <Avatare name={row.name} image={row.image}/>
              </td>
              <td className="column-name">
                <h6>{row.name}</h6>
              </td>

              <td className="column-email" ><h6>{row.email}</h6></td>

              <td className="column-date" ><h6>{row.DateNai}</h6></td>

              <td className="column-action" >
                <Button onClick={() => visualiser(row.id,row.name,row.email,row.DateNai,row.image)} color="primary" > <FontAwesomeIcon size="lg" icon={faEye} />    </Button><br />
                <Button onClick={() => handleDelete(row.id)} color="primary"> <FontAwesomeIcon size="lg" icon={faTrash} />  </Button>
              </td>
            </tr>
          ))
          }
        </tbody>

        <tfoot>

        </tfoot>
        
      </table>
      
    </div>
    
  );
}

  export default Table_Utilisateurs