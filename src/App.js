import './App.css';
import Alert from './Component/Alert';
import About from './Component/About';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const changeLight = () =>{
     setMode("light");
     document.body.style.backgroundColor ="white";
     document.body.style.color ="black";
     showAlert("Light mode has been enabled","success");
     document.title = "TextUtils-Light mode";
  }
  const changeDark = () =>{
    setMode("dark");
    document.body.style.backgroundColor ="#33373e";
    document.body.style.color ="white";
    showAlert("Dark mode has been enabled","success");
    document.title = "TextUtils-Dark mode";
    // setInterval(() => {
    //   document.title = "TextUtils has several functions.";
    // }, 2000);

    // setInterval(() => {
    //   document.title = "It has three color modes.";
    // }, 1500);
  }

  const changeGolden = () =>{
    setMode("golden");
    document.body.style.backgroundColor ="#fac848";
    document.body.style.color ="green";
    showAlert("Golden color mode has been enabled","success");
    document.title = "TextUtils-Golden color mode";
  }

  const showAlert = (message, type) =>{
     setAlert(
      {
        msg: message,
        type: type
      }
     )

     setTimeout(() => {
      setAlert(null);
     }, 1500);
  }
 

  // const toggleMode = () =>{
  //     if (mode === "light"){
  //       setMode ("light");
  //       document.body.style.backgroundColor ="white";
  //       document.body.style.color ="black";
  //       showAlert("Light mode has been enabled","success");
        
  //     }
  //     else if (mode === "dark"){
  //       setMode ("dark");
  //       document.body.style.backgroundColor ="#282c34";
  //       document.body.style.color ="white";
  //       showAlert("Dark mode has been enabled","success");
        
  //     }

  //     else {
  //       setMode ("golden");
  //       document.body.style.backgroundColor ="#fac848";
  //       document.body.style.color ="black";
  //       showAlert("Golden color mode has been enabled","success");
        
  //     }
  // }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" Mode={mode} changeLight={changeLight} changeDark={changeDark} changeGolden={changeGolden}/>
        <Alert alert={alert}/>
      
       <div className="container my-3">
       
        <Routes>
          <Route exact path="/about" element={<About Mode={mode} />}/>
          <Route exact path="/" element={<Textform  Mode={mode} showAlert={showAlert}/>}/>
        </Routes>  

       </div>      
      </Router>

       
    </>
  );
}

export default App;
