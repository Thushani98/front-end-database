import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import 'boostrap/dist/css/boostrap.css';
import Home from './pages/Home';
import Item from './pages/Item';
import Categories from './pages/Categories';
import Category from './pages/Category';
import Order from './pages/Order';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import ProtectedRoute from './utils/ProtectedRoute';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element = { <ProtectedRoute/> } />
          <Route path = "/" element= { <Home/>}/>
          <Route path = "/item/:id" element= { <Item/>}/>
          <Route path = "/categories" element= { <Categories/>}/>
          <Route path = "/categories/:id" element= { <Category/>}/>
          <Route path = "/order" element= { <Order/>}/>

          <Route path = "/order" element= { <Order/>}/>
          <Route path = "/register" element= { <Register/>}/>
          <Route path = "/login" element= { <Login/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
