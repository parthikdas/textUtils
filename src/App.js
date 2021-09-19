import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light") // for mode
  const [alert, setAlert] = useState(null) // for alert
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{ // After 2 sec remove the alert
      setAlert(null)
    }, 1500)
  }
  const [buttonColor, setButtonColor] = useState('primary')// for button color
  // For different themes
  const buttonColorFunc = {
    Blue : function () {
    document.body.style.backgroundColor = '#042743';
    setButtonColor('primary')
    showAlert('Blue colour enabled', 'success')
  }, Green : function () {
    document.body.style.backgroundColor = 'rgb(1,75,1)';
    setButtonColor('success')
    showAlert('Green colour enabled', 'success')
  }, Red : function () {
    document.body.style.backgroundColor = 'rgb(87,0,0)';
    setButtonColor('danger')
    showAlert('Red colour enabled', 'success')
  }, Yellow : function () {
    document.body.style.backgroundColor = 'rgb(133,136,0)';
    setButtonColor('warning')
    showAlert('Yellow colour enabled', 'success')
  }, Black : function () {
    document.body.style.backgroundColor = 'rgb(37,37,36)';
    setButtonColor('light')
    showAlert('Black colour enabled', 'success')
  }};
  // Toggel mode
  const toggleMode = () => {
    if(mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success")
      // document.title = "TextUtils - Dark Mode" // u can dynamically update title butdont do it unless its like facebook showing how many messages are there, it shows like facebook(10)
      // dont do this, this is just for knowledge
      // setInterval(() => {
      //   document.title = "TextUtils is amazing mode"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "install TextUtils Now"
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      setButtonColor('primary')
      showAlert("Light Mode has been enabled", "success")
      // document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>
      {/* <Navbar name="TextUtils" about="About textUtils"/> */}
      <Router>
      <Navbar name='TextUtils' mode={mode} toggleMode={toggleMode} showAlert={showAlert} buttonColorFunc={buttonColorFunc}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <TextForm heading='Try TextUtils' mode={mode} showAlert={showAlert} buttonColor={buttonColor}/>
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
