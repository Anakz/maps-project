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

function Photo(props) {
    const classes = useStyless();
    return (
        <Avatar value="Nikola" alt={props.name} src="/static/images/avatar/1.jpg" />
    )
}


export default Photo
