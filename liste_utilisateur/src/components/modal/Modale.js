import React,{useState,useEffect} from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {Button} from '@material-ui/core'


import './Modale.css'
import { makeStyles } from '@material-ui/core/styles';

//formulaire
import Formulaire from '../formulaire/Formulaire';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

function Modale(props) {
    const {} = props;
    
    const classes = useStyles();

    const {
        buttonLabel,
        className
      } = props;

    //L'ouverture et la fermeture du Modal
    const [ouvert, setOuvert] = useState(false)

    //pour fermer le modal (changer la valeur de ouvert)
    const basculer = (e) => 
    {
        e.preventDefault();//pour ne pas actualisé la page
        setOuvert(!ouvert);
    }

    //Les 6 variables de type state (id, name, email,date naissance, image)
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [dateNai, setDateNai] = useState('')
    const [image, setImage] = useState('')

    //modifer les coordonnées depuis le component 'Formulaire'
    const changeCoordonne = (n,e,d,i) =>
    {
        setId(id => id +1)
        setName(n);
        setEmail(e)
        setDateNai(d)
        setImage(i);
        setOuvert(false)
    }

    //Hook useEffect pour transphérer les 6 coordonées d'une maniere automatique apres le sort de ce component 'Modale.js'
    useEffect(() => {
        props.remplirTableau(id,name,email,dateNai,image)
    }, [id,name,email,dateNai,image])

    return (
        <div>
            <Button variant="contained" color="primary" onClick={basculer}>Ajouter un utilisateur</Button>
            <Modal isOpen={ouvert} >
                <ModalHeader>
                    <b>Veuillez saisir les informations demandés</b> 
                    <Button  style={{marginLeft:'16px'}} onClick={basculer}><FontAwesomeIcon icon={faTimes}/></Button>
                </ModalHeader>

                <ModalBody>
                    
                        <Formulaire changeCoordonne={changeCoordonne} basculer={basculer}  />
                    
                </ModalBody>
            </Modal>
        </div>
    )
}

export default Modale
