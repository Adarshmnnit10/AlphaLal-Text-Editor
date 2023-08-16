import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';
// import About from './Components/About';

function App() {
  const [mode,setMode]=useState('dark')
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  return (
    <>
    <Navbar mode={mode}/>
    <Alert alert={alert}/>
    <div className="container">
    <TextForm showAlert={showAlert} heading="Enter Your Text"/> 
    {/* <About/> */}
    </div>
    
    
    </>
  );
}

export default App;
