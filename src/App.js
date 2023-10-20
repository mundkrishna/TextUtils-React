import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom"


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  function handleModeChange() {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#133148";
      document.title = "TextUtils - Dark Mode";
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Light Mode";
      showAlert("Light mode has been enabled", "info");
    }
  }

  return (
    <>
      {/* <Router> */}
      <Navbar mode={mode} modeChange={handleModeChange} title="TextUtils" aboutUs="About" />
      <Alert alert={alert} />
      {/* <Navbar /> */}
      <div className="container my-3">
        {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/"> */}
        <TextForm heading="Enter the text to analyse below" mode={mode} showAlert={showAlert} />
        {/* </Route>
          </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
