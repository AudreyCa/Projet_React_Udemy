import React from "react";
import { useState, useEffect } from "react";
import "../Counter.css";

function Counter() {

    let count = 0;
    useEffect(() => {
        window.alert('I am clicked'
        )
    })
    const [currentstate, updatedstate] = useState(count);
    const handleClick = () => {
    
        updatedstate(currentstate + 1)
    }

    return (
        <>
            <div className="counter_parent">
                <div className="main-div">
                    <h3>Counter</h3>
                    <button onClick={handleClick}>{currentstate}</button>
                </div>
            </div>
        </>
    )
}

export default Counter;