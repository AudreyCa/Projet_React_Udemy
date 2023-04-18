import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode></React.StrictMode>

  <BrowserRouter>
    <App />
  </BrowserRouter>
 
);





// // Variable pour le style
// const main = {
//   backgroundColor:'green',
//   height:'100vh',
//   width: '100%' 
// }

// const firstvariable = "Expert";
// const secondvariable = "Developper";

// // selection de l'élément du parent div "root" dans index.html
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <React.StrictMode></React.StrictMode>
//   <>
//     <div style={ main }>
//       <h1>Hello world</h1>

//       <h2>
//         We are {firstvariable + ' ' + secondvariable}
//         {/* {`We are ${firstvariable}  ${secondvariable}`} */}
//       </h2>
//     </div>
//   </>
 
// );




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

