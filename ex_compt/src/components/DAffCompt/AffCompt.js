import './AffCompt.css';
import React from 'react'

function AffCompt(props) {
    const {time} = props;
    return (
        <div>
            <h1  className="h1Cmpt">Compteur</h1>
            
            <span className="Cmpt">{ (time.h) >=10 ? time.h : '0'+time.h }</span> &nbsp;:&nbsp;
            <span className="Cmpt">{ (time.m) >=10 ? time.m : '0'+time.m }</span> &nbsp;:&nbsp;
            <span className="Cmpt">{ (time.s) >=10 ? time.s : '0'+time.s }</span> &nbsp;:&nbsp;
            <span className="Cmpt">{ (time.ms) >=10 ? time.ms : '0'+time.ms }</span> &nbsp;&nbsp;
        </div>
    )
}


export default AffCompt ;