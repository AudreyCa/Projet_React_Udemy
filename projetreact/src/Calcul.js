import React from "react";
import "./Calcul.css";
import { useState } from 'react';

function Calcul() {
    const [result, setResult] = useState('');
    // pour afficher, dans l'imput answer les valeur sur lesquelles on clique, grâce à la calue={result}
    const clickandler = (event) => {
        setResult(result.concat(event.target.value))
    }
    // Pour clear l'answer, sur le bouton clear
    const cleardisplay = () => {
        setResult(parseInt(result, 10).toString());
    }
    // Pour faire la somme, bouton égal
    const calculate = () => {
        setResult(eval(result).toString());
    }
    return (
        <>
            <div className="calc">
                <input type="text" placeholder="0" id="answer" value={result}/>
                <input type="button" value="9" className="button" onClick={clickandler}/>
                <input type="button" value="8" className="button" onClick={clickandler}/>
                <input type="button" value="7" className="button" onClick={clickandler} />
                <input type="button" value="6" className="button" onClick={clickandler} />
                <input type="button" value="5" className="button" onClick={clickandler} />
                <input type="button" value="4" className="button" onClick={clickandler} />
                <input type="button" value="3" className="button" onClick={clickandler} />
                <input type="button" value="2" className="button" onClick={clickandler} />
                <input type="button" value="1" className="button" onClick={clickandler} />

                <input type="button" value="0" className="button" onClick={clickandler} />
                <input type="button" value="+" className="button" onClick={clickandler} />
                <input type="button" value="-" className="button" onClick={clickandler} />
                <input type="button" value="/" className="button" onClick={clickandler} />
                <input type="button" value="*" className="button" onClick={clickandler} />
                <input type="button" value="%" className="button" onClick={clickandler} />
                <input type="button" value="." className="button" onClick={clickandler} />

                <input type="button" value="Clear" className="button button1" onClick={cleardisplay} />
                <input type="button" value="=" className="button button1" onClick={calculate} />
            </div>
        </>
    );
}

export default Calcul;