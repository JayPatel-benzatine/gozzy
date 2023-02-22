import React from 'react'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import LogIn from './pages/LogIn'
import ContactUs from './pages/ContactUs'
import Profile from './pages/Profile'
import Bank from './pages/Bank'
import Address from './pages/Address'
import Notification from './pages/Notification'
import Categories from './pages/Categories';
import ProductsDetails from './pages/ProductsDetails'
import Shops from './pages/Shops'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import PrivateRoute from '../src/utils/PrivateRoute'
import CheckoutPage from './pages/CheckoutPage'
import Order from './pages/Order'
import Ordertrack from './pages/Ordertrack'
import TrackOrder from './pages/TrackOrder'
import Error from './pages/Error'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div className=' app_main'>
      <Routes>
        <Route path='/' element={<Home />} />
       
        <Route element={<PrivateRoute />}>
          <Route path='/cart' element={<Cart />} />
          <Route path='/favroite' element={<Wishlist />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/bank' element={<Bank />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/address' element={<Address />} />
          <Route path='/notification' element={<Notification />} />
          <Route path='/order' element={<Order />} />
          <Route path='/ordertrack' element={<Ordertrack />} />
          <Route path='/track' element={<TrackOrder />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shops />} />
        <Route path='/productDetails/:id' element={<ProductsDetails />} />
        <Route path='/category/:name/:id' element={<Categories />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/*' element={<Error />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App