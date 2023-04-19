import React from "react";

// import Pokemon from "./Components/Pokemon";
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';

const Array = [
    {
        name: "John",
        expertise: "Frontend",
        Experience: "3 ans"
    },
    {
        name: "Marc",
        expertise: "Backend",
        Experience: "4 ans"
    },
    {
        name: "Sarah",
        expertise: "DevOps",
        Experience: "6 ans"
    }
]

function App2() {
    return (
        <>
        {/* <Pokemon /> */}
        <p>Personal information :</p>
        <p>{Array.map(
            (element) => { 
                return (<p>{element.name}</p>)
            }
            )}</p>
<AcUnitOutlinedIcon />
        </>
    );
}

export default App2;

