import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Sachtiengviet from './Sachtiengviet/Sachtiengviet';
import Container from './Container/Container';
import Login from './Login/Login';
import Cart from './Cart/Cart';
import Signup from './Signup/Signup';
import Bookenglish from './Bookenglish/Bookenglish';
import Tool from './Tool/Tool';
import Souvenir from './Souvenir/Souvenir';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route path='/' element={<Container/>}/>
                <Route path='/Sachtiengviet' element={<Sachtiengviet/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/english' element={<Bookenglish/>}/>
                <Route path='/tool' element={<Tool/>}/>
                <Route path='/souvenir' element={<Souvenir/>}/>
                

            </Route>

          
        </Routes>
      </BrowserRouter>
      
    </React.StrictMode>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
