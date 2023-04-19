import React, { useState, useEffect } from "react";
import axios from 'axios';


const Pokemon = () => {
    const [num, setnum] = useState("1");
    const [name, setname] = useState();
    const [moves, setmoves] = useState();
    const selectNum = (event) => {
        setnum(event.target.value);
    }
    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setname(res.data.name)
            setmoves(res.data.moves.length)
            console.log(res.data.moves.length);
        }
        getData();
    });
    return (
        <>
            <h1>Vous avez selectionné la valeur <span style={{color: 'red'}}>{num}</span></h1>
            <h2>Le nom du pokémon est <span style={{color: 'red'}}>{name}</span></h2>
            <h3>Il a <span style={{color: 'red'}}>{moves}</span> mouvements</h3>
            
            <select name="" id="" value={num} onChange={selectNum}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="25">25</option>
            </select>
        </>
    )

}

export default Pokemon;