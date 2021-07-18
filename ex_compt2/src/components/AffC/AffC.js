import React from 'react'
import './AffC.css'

function AffC(props) {
    const {compte} = props;
    return (
        <div>
            <h1>Compteur</h1>
            <span className="Cmpt">{(compte) >=10 ? compte : '0'+compte} </span>&nbsp;
        </div>
    )
}

export default AffC;