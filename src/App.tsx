import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Winetable from './component/Winetable';
import Gammawinetable from './component/Gammawinetable';

function App() {
  return (
    <div  className='main_page'>
     
     <Winetable/>
     <Gammawinetable/>
    </div>
  );
}

export default App;
