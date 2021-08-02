/*import React,{useState,useEffect} from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button } from '@material-ui/core';

//Le bouton visualiser
//card
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 800,
      backgroundColor:'#cfcacc',
      borderRadius:'10px',
    },
    media: {
      height: '240px',
      backgroundColor:'black',
      display:'block',
      borderRadius:'10px',
    },
    media1: {
        height: '420px',
        backgroundColor:'black',
        display:'block',
        borderRadius:'10px',
      },
    action: {
        backgroundColor:'white',
    },
    content: {
        width:'800px',
        height:'210px',
    },
    mo : {
        backgroundColor:'red'
    }
  });

function StandardModal(props) {
    const classes = useStyles();


    return (
        <div >
             
            <Modal className={classes.Mo} isOpen={props.standardOpen} >

            {props.standardCoordone.etat === 0?
            <div>
                <ModalHeader style={{backgroundColor:'#dbdbdb',marginBottom:'5px',padding:'5px'}}>
                    <b style={{marginLeft:'121px'}}>Informations de l'utilisateur</b>
                    <Button  variant="contained" style={{marginLeft:'40px'}} onClick={props.standardClose}>X</Button>
                </ModalHeader>
                
                    <ModalBody style={{backgroundColor:'#dbdbdb'}}>

                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={props.standardCoordone.image}
                            title="Contemplative Reptile"
                            />
                            <CardContent className={classes.content}>

                                <Typography style={{marginBottom:'39px'}} gutterBottom variant="h5" component="h3">
                                    <b>Nom : &nbsp;&nbsp;</b>{props.standardCoordone.name}
                                </Typography>
                                <Typography style={{marginBottom:'39px'}} gutterBottom variant="h6" component="h3">
                                    <b>Email : &nbsp;&nbsp;</b>{props.standardCoordone.email}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="h3">
                                    <b>Date de naissance : &nbsp;&nbsp;</b>{props.standardCoordone.dateNai}
                                </Typography>

                            </CardContent>

                        </CardActionArea>

                    </Card>

                    </ModalBody>
            </div>
                        :''
            }


            {props.standardCoordone.etat === 1?

                <ModalBody style={{borderRadius:'30px'}}>

                <Card className={classes.root}  style={{backgroundColor:'blue'}}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media1}
                        image={props.standardCoordone.image}
                        title="Contemplative Reptile"
                        />
                        
                            <span style={{backgroundColor:'#cecece',width:'500px',textAlign:'center',color:'black',position:'absolute',top:'0px'}}><b>{props.standardCoordone.name}</b></span>
                        

                    </CardActionArea>
                </Card>

                </ModalBody>
                    :''
            }

                <ModalFooter >
                    <Button variant="contained" fullWidth onClick={props.standardClose}>Fermer</Button>
                </ModalFooter>
            </Modal>

            

        </div>
    )
}

export default StandardModal
*/