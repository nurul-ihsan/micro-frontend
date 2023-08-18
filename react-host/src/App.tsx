import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { AllRoutes } from './Components/AllRoutes/AllRoutes';
import ShadowWrapper from './Components/WrapperMFE/shadow-wrapper';
import Hello from 'remoteReact/Hello';

function App() {
  return (
    <div className='App'>
      <Hello />
      <ShadowWrapper importName='banner-vue' elementName='banner-vue' />
      {/* <Navbar />
      <AllRoutes /> */}
    </div>
  );
}

export default App;
