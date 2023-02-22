import React from 'react'
import MainNav from '../component/navbar/MainNav';
import Footer from '../component/footer/Footer';
import OrderPlace from '../component/Checkout/OrderPlace';
import Scroll from '../component/Scroll Button/Scroll'

const Order = () => {
  return (
    <div>
    <MainNav />
    <OrderPlace />
    <Footer />
    <Scroll />
  </div>
  )
}

export default Order