import React from 'react'
import './Table_Utilisateurs.css'

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//Button
import {Button} from '@material-ui/core'

//icone font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons'



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#E2F5FF',
    border:6,
    borderRadius:4,
  },
  body: {
    fontSize: 14,
    backgroundColor: '#00000',
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
        //dddddd
    },
  },
}))(TableRow);

function createData(id ,name, email, DateNaissance, carbs) {
  return { id ,name, email, DateNaissance, carbs };
}

//Nouveau array
const fruits = [{id:"Banana", nome:"Orange", email:"Apple", date:"Mango"}];

const rows = [
  createData('1','Anas AKZAZ', 'anasakzaz23@gmail.com', "23/04/2000"),
  createData('2','Sanae NACER', 'sanaenacer@gmail.com', "18/07/1993"),
  createData('3','Younes SEFIANI', 'younessefiani592@gmail.com', "05/09/2000"),
  createData('4','Ayoub HMIDI', 'ayoubhmidi@gmail.com', "25/02/2002"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    background: 'white',
    border:3,
    borderRadius:15,
    borderColor: 'red',
    style: { width: '1rem', height: '1rem' },
  },
});


function Table_Utilisateurs() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className="t" aria-label="customized table">
        <TableHead>
          <TableRow>

            <StyledTableCell ><b>Nom complet</b></StyledTableCell>

            <StyledTableCell align="left"><b>E-mail</b></StyledTableCell>

            <StyledTableCell align="left"><b>Date Naissance</b></StyledTableCell>

            <StyledTableCell align="center"><b>Action</b></StyledTableCell>
            
          </TableRow>
        </TableHead>
        
        <TableBody id="TableBody">
          {rows.map((row) => (
            <StyledTableRow key={row.id}>

              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>

              <StyledTableCell align="left">{row.email}</StyledTableCell>

              <StyledTableCell align="center">{row.DateNaissance}</StyledTableCell>

              <StyledTableCell Collapse={2} align="left">
                <Button color="primary"> <FontAwesomeIcon icon={faEye} />    </Button><br />
                <Button color="primary"> <FontAwesomeIcon icon={faTrash} />  </Button>
              </StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
    
  );
}

  export default Table_Utilisateurs