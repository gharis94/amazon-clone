import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import { Routes,Route } from 'react-router-dom';
import CheckOutPage from './Pages/CheckOutPage/CheckOutPage';
import Category from './Pages/Category/Category';

function App() {
  return (
    <div className="bg-gray-100 h-screen">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/checkout' element={<CheckOutPage/>}/>
        <Route path='category/:categoryId' element={<Category/>}/>  
      </Routes>
    </div>
  );
}

export default App;
