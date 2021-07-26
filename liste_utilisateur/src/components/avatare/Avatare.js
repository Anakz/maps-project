import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyless = makeStyles((theme) => ({
   
    sizeAvatar: {
        height: theme.spacing(8),
        width: theme.spacing(8),
      },
  }));

function Avatare(props) {
    const classes = useStyless();
    return (
        <Avatar className={classes.sizeAvatar} alt={props.name} src={props.image} />
    )
}

export default Avatare
