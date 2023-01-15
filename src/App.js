import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import { Routes,Route } from 'react-router-dom';
import CheckOutPage from './Pages/CheckOutPage/CheckOutPage';
import Category from './Pages/Category/Category';
import SignInPage from './Pages/SignInPage/SignInPage';
import Order from './Pages/Order/Order';

function App() {
  return (
    <div className="bg-gray-100 h-screen">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/checkout' element={<CheckOutPage/>}/>
        <Route path='category/:categoryId' element={<Category/>}/>
        <Route path='/signin' element={<SignInPage/>} />
        <Route path='/order' element={<Order/>} />
      </Routes>
    </div>
  );
}

export default App;
