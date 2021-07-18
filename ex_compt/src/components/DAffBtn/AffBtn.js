import './AffBtn.css';
import React from 'react'

function AffBtn(props) {
    //pour facilité l'ecriture
    const {start, etat, arreter, reinitialiser, reprendre} = props;
    return (
        <div>
            {(etat) === 0 ? <button className="btn-green" onClick={start} >Démarrer</button> : '' }
            
            {(etat) === 1 ?
             <div>
                 <button className="btn-red" onClick={arreter} >Arrêter</button>
                 <button className="btn-grey" onClick={reinitialiser} >réinitialiser</button>
             </div> : '' }
            
            {(etat) === 2 ?
             <div>
                <button className="btn-bleu" onClick={reprendre} >Reprendre</button>
                <button className="btn-grey" onClick={reinitialiser} >réinitialiser</button>
             </div> : '' 
            }

        </div>
    )
}


export default AffBtn ;