
import './App.css';
import React, { Component , useState} from 'react';
import Navbar from './components/Navbar';
import NewComponent from './components/NewComponent';
import {BrowserRouter as Main,Routes,Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';



const App = ()=>{
  const [state, setState] = useState(0);
  
  const setProgress = (progress) => {
          setState (progress)
  }
    return (
      <div>
        <Main>
          <LoadingBar height={3} color='#f11946' progress={setProgress} />
            
        <Navbar/>
        <Routes>
            <Route path='/ ' element={<NewComponent setProgress={setProgress} pagesize={5} country='us' category='general'/>}></Route>
            <Route path='/business' element={<NewComponent setProgress={setProgress} pagesize={5} country='us' category='business'/>}></Route>
            <Route path='/technology' element={<NewComponent setProgress={setProgress} pagesize={5} country='us' category='technology'/>}></Route>
            <Route path='/entertainment' element={<NewComponent setProgress={setProgress} pagesize={5} country='us' category='entertainment'/>}></Route>
            <Route path='/general' element={<NewComponent setProgress={setProgress} pagesize={5} country='us' category='general'/>}></Route>
            <Route path='/healthscience' element={<NewComponent setProgress={setProgress} pagesize={5} country='us' category='healthscience'/>}></Route>
            <Route path='/sports' element={<NewComponent setProgress={setProgress} pagesize={5} country='us' category='sports'/>}></Route>
        </Routes>
        
        </Main> 
       
      </div>
    );
  }

  export default App



