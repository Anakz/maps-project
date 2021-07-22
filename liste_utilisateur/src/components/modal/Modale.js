import React,{useState} from 'react'
import { Modal, ModalHeader, ModalBody,Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {Button} from '@material-ui/core'


import './U_Modal.css'
import { makeStyles } from '@material-ui/core/styles';

//formulaire
import Formulaire from './FormInfo';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

function Modale(props) {
    const {nom, remplissage} = props;
    
    const classes = useStyles();

    const {
        buttonLabel,
        className
      } = props;

    //L'ouverture et la fermeture du Modal
    const [ouvert, setOuvert] = useState(false)

    const basculer = (e) => 
    {
        setOuvert(!ouvert);
        e.preventDefault();//pour ne pas actualisé la page
    }


    //Les coordonées d'un utilisateur
    const [data, setData] = useState("test")

    const recevoirDonneDepuisEnfant = (data) =>
    {
        //data.preventDefault();
        setData({data});
        console.log({data});
    }

    //La nouvelle methode pour héritage des données
    const [smia, setSmia] = useState("rien n'est écrit")

    const changeSmiat = (nom) =>
    {
        console.log("wa akhiran")
    }

    return (
        <div>
            <Col><Button variant="contained" color="primary" onClick={basculer}>Ajouter un utilisateur</Button></Col>
            <Modal isOpen={ouvert} >
                <ModalHeader>
                    <b>Veuillez saisir les informations demandés</b> 
                    <Button  style={{marginLeft:'16px'}} onClick={basculer}><FontAwesomeIcon icon={faTimes}/></Button>
                </ModalHeader>

                <ModalBody>
                    <p>
                        <FormInfo />
                    </p>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default Modale
