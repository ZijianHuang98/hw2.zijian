import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/home';
import Navigation from './containers/navigation';
import Fishing from './containers/fishing';
import Orientation from './containers/orientation';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Traveling from './containers/teavel';
import Top from './containers/top';
const AppContainer = () => {
  return(
    <>
    <Top/>
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route element={<Home/>} path = '/'/>
      <Route element = {<Fishing/>} path = '/fishing'/>
      <Route element = {<Orientation/>} path = '/orientation'/>
      <Route element = {<Traveling/>} path = '/traveling'/>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}
ReactDOM.render(<AppContainer />, document.querySelector('#root'))
