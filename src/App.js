import './App.css';
import Navbar from './Components/Navbar';
// import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';

function App() {

  const [darkmode, setDarkMode]=useState(false)
  return (
  <>

  <Navbar title ="Kalpey" TextUtils = "About Us" homer = "Home"/>
  <textform/>
  {/* <Navbar/> */}
  {/* <Navbar title = "homer"/> */}
  <Navbar title='TextUtils' mode = {darkmode}/>
  <div className='container my-3'>

    <TextForm heading = "Enter the text to analyze below"/>
    <About/>
  </div>
 
  </>
  );  
}

export default App;
