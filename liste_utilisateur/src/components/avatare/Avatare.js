import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyless = makeStyles((theme) => ({
    root: {
      
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

function Avatare(props) {
    const classes = useStyless();
    return (
        <Avatar alt={props.name} src="/static/images/avatar/1.jpg" />
    )
}


export default Avatare
