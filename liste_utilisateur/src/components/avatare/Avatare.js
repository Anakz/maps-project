import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';
import { Alert } from 'bootstrap';

function Avatare(props) {

    const useStyless = makeStyles((theme) => ({

        sizeAvatar: {
            height: theme.spacing(8),
            width: theme.spacing(8),
            backgroundColor: getRandomBackGroudColor(),
            color: getRandomColor(),
          },
      }));

    //Fonction pour changer le couleur de l'écriture de l'avatar
    function getRandomColor() 
    {
        var ran=['#ffffff','#2c5c34', '#7e4d1d', '#ffffff', '#ffffff', '#ffffff', 'black']
        var k
        {
            props.name[0] >='A' && props.name[0] <='E' || props.name[0] >='a' && props.name[0]>='e' ? k=0 :
            props.name[0] >='F' && props.name[0] <='I' || props.name[0] >='f' && props.name[0]<='i' ? k=1 :
            props.name[0] >='J' && props.name[0] <='N' || props.name[0] >='j' && props.name[0]<='n' ? k=2 :
            props.name[0] >='O' && props.name[0] <='R' || props.name[0] >='o' && props.name[0]<='r' ? k=3 :
            props.name[0] >='S' && props.name[0] <='V' || props.name[0] >='s' && props.name[0]<='v' ? k=4 :
            props.name[0] >='W' && props.name[0] <='Z' || props.name[0] >='w' && props.name[0]<='z' ? k=5 : k=6
        }
        var color=ran[k]
        return color;
      }

    //Fonction pour couleurer backgroud de l'avatar
    function getRandomBackGroudColor() 
    {
        //var van=['#6011F1','#D868F2', '#F48BC7', '#8EECF8', '#5749DD', '#092C91']
        var ran=['#ff99cc','#80bfff', '#ffd9b3', '#669999', '#cc6699', '#092C91']
        var k
        {
            props.name[0] >='A' && props.name[0] <='E' || props.name[0] >='a' && props.name[0]>='e' ? k=0 :
            props.name[0] >='F' && props.name[0] <='I' || props.name[0] >='f' && props.name[0]<='i' ? k=1 :
            props.name[0] >='J' && props.name[0] <='N' || props.name[0] >='j' && props.name[0]<='n' ? k=2 :
            props.name[0] >='O' && props.name[0] <='R' || props.name[0] >='o' && props.name[0]<='r' ? k=3 :
            props.name[0] >='S' && props.name[0] <='V' || props.name[0] >='s' && props.name[0]<='v' ? k=4 :
            props.name[0] >='W' && props.name[0] <='Z' || props.name[0] >='w' && props.name[0]<='z' ? k=5 : k=6
        }
        var color=ran[k]
        return color;
      }

    //L'affichage de la 1ere lettre du deuxiem nom
    const [i, setI] = useState(0)
    useEffect(() => 
    {
        if (props.name[i]!==' ') 
        {
             setI(i+1)
        }
    })

    const classes = useStyless();
    return (
       
        <Avatar className={classes.sizeAvatar} children={props.name[0]+props.name[i+1]} src={props.image}/>
            
    )
}


export default Avatare