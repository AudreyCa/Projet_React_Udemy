import React from "react";
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate ()
    const handleClick = () => {
        navigate("/about");
    }
    return (
        <>
            <p>
                This is HomePage
            </p>
            <button onClick={handleClick}>Click Me</button>
        </>
    )

}

export default Home;