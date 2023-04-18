import React from "react";
// , { useState, useEffect }
import "./App.css";
import Header from "./Components/Header";
import Counter from "./Components/Counter";
import "./Counter.css";
// import Test from "./Test";
import Home from "./Components/Home";
import About from "./Components/About";
import { Routes, Route } from 'react-router-dom';

function App() {
    // const [toggle, updatetoggle] = useState(false)
    // const togglefunction = () => {
    //     updatetoggle(!toggle)
    // }
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
            {/* <div className="main">
                <Header />
                <Counter />
            </div> */}
            {/* <div>
                <button onClick={togglefunction}>
                    Toggle
                </button>
                {toggle && <Test />}
            </div> */}
        </>
    );
}

export default App;

