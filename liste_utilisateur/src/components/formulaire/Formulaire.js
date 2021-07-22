import React,{useState} from 'react'
//formulaire d'apres reactrap
import { Form, FormGroup, FormText, Col, ModalFooter } from 'reactstrap';

//input depuis material ui
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

//Date
//import {KeyboardDatePicker } from '@material-ui/pickers';

//upload image
import Button from '@material-ui/core/Button';

//icon image
import ImageIcon from '@material-ui/icons/Image';

//icone font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'

//Button icone
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    margin: {
        margin: theme.spacing(1),
      },
      input: {
        display: 'none',
      },
      group:{
          marginLeft:'18%'
      },
      field:{
        width:'280px',
      },
      footer: {
          marginLeft:'180px',
      }
  }));


  const rows = [];

function Formulaire(props) {
    const {basculer} = props
    

    //valeur du tableau
    const [id , setId] = useState(0);
    const [nom , setNom] = useState('ninini');
    const [mail , setMail] = useState('');
    const [dateNai , setDateNai] = useState('');

    //erreur des valeurs du tableau
    const [nomErreur , setNomErreur] = useState(false);
    const [mailErreur , setMailErreur] = useState(false);
    const [dateNaiErreur , setDateNaiErreur] = useState(false);

      
  const remplissage = (e) =>
  {
    e.preventDefault(); //pour ne pas actualiser la page

    //if (nom){console.log({nom},'|',{mail},'|',{dateNai})} 
        
    return {nom}
  } 

  const onAffiche = () =>
  {
      props.changeSmia();
  }



    const classes = useStyles();
    return (
        <div>
            <Form onSubmit="submit">
                <FormGroup className={classes.group}>
                    <FontAwesomeIcon style={{marginTop:'22px'}} icon={faUser} />
                    <TextField error={nomErreur} onChange={ (e) => setNom(e.target.value) } className={classes.field} id="nom" type="text" label="Nom complet" />
                </FormGroup>
                <br />
                <FormGroup className={classes.group}>
                    <FontAwesomeIcon style={{marginTop:'24px'}} icon={faEnvelope} />
                    <TextField error={mailErreur} onChange={ (e) => setMail(e.target.value) } className={classes.field} id="standard-basic" type="email" label="E-mail"  />
                </FormGroup>
                <br /><br />
                <FormGroup style={{marginLeft:'21%'}}>
                    <TextField error={dateNaiErreur} remplissage={remplissage} onChange={ (e) => setDateNai(e.target.value) } className={classes.field} id="standard-basic" type="date" defaultValue={"23/04/2000"} />
                </FormGroup>
                <br /><br />
                <FormGroup style={{marginLeft:'34%'}}>
                        <input accept="image/*" className={classes.input} id="contained-button-file" multiple type="file" />
                        <label htmlFor="contained-button-file">
                            <Button startIcon={<ImageIcon />} component="span" >Importer image</Button>
                        </label>
                </FormGroup>
                <br />
                {/**
                 * <FormGroup>
                    <TextField id="filled-basic" label="Filled" variant="filled" />
                </FormGroup>
                <br />
                <FormGroup>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </FormGroup>
                <br />
                <FormGroup>
                    <label htmlFor="normal">Normal</label>
                    <input type="text" name="normal"  />
                </FormGroup>
                <br />
                */}
                <hr></hr>
                <div className={classes.footer}>
                    <Button onClick={onAffiche} variant="contained" color="primary" startIcon={<SaveIcon />}>Enregistrer</Button>&nbsp;&nbsp;&nbsp;
                    <Button type="submit" onClick={basculer} variant="contained" color="secondary" startIcon={<DeleteIcon />}>Annuler</Button>
                </div>
                    
                    {/*
                    <Button type="submit" nom={nom}>Afficher</Button>
                    <Button type="submit" onClick={props.basculer}>Annuler</Button>
                    */}
            </Form>
        </div>
    )
}

export default Formulaire
