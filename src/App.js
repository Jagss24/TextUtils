
import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react'
import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light');
  const [btntext, setbtnText] = useState('dark')
  const [alert, setAlert] = useState(null)
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setbtnText('light')
      document.body.style.backgroundColor = '#343a40'
      document.body.style.color = 'white'
      showAlert('Dark Mode has been enabled', 'success')
    }
    else {
      setMode('light')
      setbtnText('dark')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert('Light Mode has been enabled', 'success')
    }
  }
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (

    <HashRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} btntext={btntext} />
      <div className="container my-4">
        <Alert alert={alert}></Alert>
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={<Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
        </Routes>

      </div>
    </HashRouter>

  );
}

export default App;
